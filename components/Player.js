import { useSession } from 'next-auth/react'
import useSpotify from '../hooks/useSpotify'
import { useRecoilState } from 'recoil'
import { currentTrackIdState, isPlayingState } from '../atoms/songAtom'
import useSongInfo from '../hooks/useSongInfo'
import { useCallback, useEffect, useState } from 'react'

import {
  NextIcon,
  PrevIcon,
  RepeatIcon,
  PlayIcon,
  PauseIcon,
  ShuffleIcon,
} from './SpotifyIcons'

import { VolumeUpIcon as VolumeDownIcon } from '@heroicons/react/outline'
import { VolumeUpIcon } from '@heroicons/react/solid'
import { debounce } from 'lodash'
import { vulomeState } from '../atoms/vulomeAtom'
import VulomeIcon from './VulomeIcon'

const Player = () => {
  const spotifyApi = useSpotify()
  const { data: session, status } = useSession()

  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState)
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)

  const [volume, setVolume] = useRecoilState(vulomeState)

  const songInfo = useSongInfo()

  const fetchCurrentSong = () => {
    if (!songInfo) {
      spotifyApi.getMyCurrentPlayingTrack().then((data) => {
        setCurrentTrackId(data.body?.item?.id)

        spotifyApi.getMyCurrentPlaybackState().then((data) => {
          setIsPlaying(data.body?.is_playing)
        })
      })
    }
  }

  const playPuseHandler = () => {
    console.log('its working')
    spotifyApi.getMyCurrentPlaybackState().then((data) => {
      if (data.body.is_playing) {
        spotifyApi.pause()
        setIsPlaying(false)
      } else {
        spotifyApi.play()
        setIsPlaying(true)
      }
    })
  }

  useEffect(() => {
    if (spotifyApi.getAccessToken() && !currentTrackId) {
      fetchCurrentSong()
      setVolume(100)
    }
  }, [currentTrackIdState, spotifyApi, session])

  useEffect(() => {
    if (volume > 0 && volume < 100) {
      debounceAdjustVolume(volume)
    }
  }, [volume])

  const debounceAdjustVolume = useCallback(
    debounce((volume) => {
      spotifyApi.setVolume(volume).catch((err) => {
        console.log(err)
      })
    }, 500),
    []
  )

  return (
    <div className="grid h-20 grid-flow-row-dense grid-cols-3 border-t border-[#282828] bg-[#181818] px-2 text-xs text-white md:text-base">
      {/* Left */}
      {console.log(songInfo)}
      <div className="flex items-center space-x-4">
        <img
          className="hidden h-14 w-14 md:inline"
          src={songInfo?.album.images?.[0].url}
          alt=""
        />
        <div>
          <h3 className="w-32 truncate md:w-40 lg:w-60">{songInfo?.name}</h3>
          <p className="text-color-1 mt-[-.2rem] text-[.75rem] font-light">
            {songInfo?.artists?.[0]?.name}
          </p>
        </div>
      </div>
      {/* Center */}
      <div className="col-span-2 flex items-center justify-center space-x-5 md:col-span-1">
        <ShuffleIcon className="button" />
        <PrevIcon className="button" />
        {isPlaying ? (
          <div className="playbtn">
            <svg
              onClick={playPuseHandler}
              className="button scale-105 fill-black hover:fill-black"
              role="img"
              height="16"
              width="16"
              viewBox="0 0 16 16"
            >
              <path fill="none" d="M0 0h16v16H0z"></path>
              <path d="M3 2h3v12H3zm7 0h3v12h-3z"></path>
            </svg>
          </div>
        ) : (
          <div className="playbtn">
            <svg
              onClick={playPuseHandler}
              className="button fill-black hover:fill-black"
              role="img"
              height="16"
              width="16"
              viewBox="0 0 16 16"
            >
              <path d="M4.018 14L14.41 8 4.018 2z"></path>
            </svg>
          </div>
        )}

        <NextIcon className="button" />
        <RepeatIcon className="button" />
      </div>
      {/* Right */}
      <div className="hidden items-center justify-end space-x-3 pr-5 md:flex md:space-x-4">
        <VulomeIcon />
        <input
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="w-14 md:w-20"
          type="range"
          min="0"
          max="100"
        />
      </div>
    </div>
  )
}

export default Player
