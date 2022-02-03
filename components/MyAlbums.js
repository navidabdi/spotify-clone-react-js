import React from 'react'

import useAlbums from '../hooks/useAlbums'

const MyAlbums = () => {
  const AlbumsInfo = useAlbums()

  return (
    <div className="flex flex-col">
      <div className="mb-5 flex items-center justify-between text-white">
        <h2 className="text-3xl font-bold">My Albums</h2>
        <a className="text-sm font-bold opacity-50" href="#">
          SEE ALL
        </a>
      </div>
      <div className="gridAlbum">
        {AlbumsInfo?.items.map((Album) => (
          <div className="flex flex-col rounded-sm bg-[#181818] p-5">
            <img
              className="mb-3 overflow-hidden rounded-lg"
              src={Album?.album?.images[1]?.url}
              alt={Album?.album?.name}
            />
            <p className="truncate font-medium text-white">
              {Album?.album?.name}
            </p>
            <p className="truncate text-sm text-white opacity-50">
              {Album?.album?.artists[0].name}
            </p>
            {console.log(Album.album)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAlbums
