import React from 'react'
import { useRecoilValue } from 'recoil'
import { playlistState } from '../atoms/playlistAtom'
import Song from './Song'

const Songs = () => {
  const playlist = useRecoilValue(playlistState)
  return (
    <div className="flex flex-col space-y-1 px-4 pb-28 text-white md:px-8">
      {playlist?.tracks.items.map((track, index) => (
        <Song key={track.track.id} track={track} order={index} />
      ))}
    </div>
  )
}

export default Songs
