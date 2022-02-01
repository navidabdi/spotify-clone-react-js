import React from 'react'
import { useRecoilState } from 'recoil'
import { currentTrackIdState, isPlayingState } from '../atoms/songAtom'
import useSpotify from '../hooks/useSpotify'
import { millisTime } from '../lib/time'

const Song = ({ order, track }) => {
  const spotifyApi = useSpotify()

  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState)
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)

  const playSong = () => {
    setCurrentTrackId(track.track.id)
    setIsPlaying(true)
    spotifyApi.play({
      uris: [track.track.uri],
    })
  }

  return (
    <div
      onClick={playSong}
      className="grid cursor-pointer grid-cols-2 rounded-md py-2 px-5 text-gray-500 hover:bg-gray-900"
    >
      <div className="flex items-center space-x-4">
        <p>{order + 1}</p>
        <img
          src={track.track.album.images[0].url}
          className="h-10 w-10"
          alt={track.track.name}
        />

        <div>
          <p className="w-36 truncate text-white lg:w-64">{track.track.name}</p>
          <p className="w-40">{track.track.artists[0].name}</p>
        </div>
      </div>
      <div className="ml-auto flex items-center justify-between md:ml-0">
        <p className="hidden w-40 truncate md:inline">
          {track.track.album.name}
        </p>
        <p>{millisTime(track.track.duration_ms)}</p>
      </div>
    </div>
  )
}

export default Song
