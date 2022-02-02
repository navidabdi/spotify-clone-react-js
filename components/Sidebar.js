import { useEffect, useState } from 'react'

import { useRecoilState } from 'recoil'
import { playlistIdState } from '../atoms/playlistAtom'
import { useSession } from 'next-auth/react'
import useSpotify from '../hooks/useSpotify'
import {
  AddIcon,
  HeartIcon,
  HomeIcon,
  LibraryIcon,
  SearchIcon,
  SpotifyLogo,
} from './SpotifyIcons'
import { sidebarTrigerAtom } from '../atoms/sidebarTrigerAtom'

const Sidebar = () => {
  const { data: session, status } = useSession()
  const [playlists, setPlaylists] = useState([])
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState)
  const [sidebarTriger, setSidebarTriger] = useRecoilState(sidebarTrigerAtom)
  const spotifyApi = useSpotify()

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items)
      })
    }
  }, [session, spotifyApi])

  return (
    <div
      className={`absolute top-0 left-0 z-10 h-screen w-[180px] translate-x-[-100%] overflow-y-scroll bg-black p-5  text-xs text-gray-500 transition-all delay-200 ease-out scrollbar-hide md:inline-flex md:w-[250px] md:translate-x-[0] lg:text-sm ${
        sidebarTriger ? 'translate-x-[0]' : ''
      }`}
    >
      <div className="space-y-4">
        <a className="block w-32 py-2" href="/">
          <SpotifyLogo />
        </a>
        <ul className="text-sm md:text-base">
          <li className="listWithIcon">
            <a className="listWithIconLink" href="#">
              <HomeIcon />
              <span className="listWithIconSpan">Home</span>
            </a>
          </li>
          <li className="listWithIcon">
            <a className="listWithIconLink" href="#">
              <SearchIcon />
              <span className="listWithIconSpan">Search</span>
            </a>
          </li>
          <li className="listWithIcon">
            <a className="listWithIconLink" href="#">
              <LibraryIcon />
              <span className="listWithIconSpan">Your Library</span>
            </a>
          </li>
          <li className="listWithIcon mt-7">
            <a className="listWithIconLink" href="#">
              <AddIcon />
              <span className="listWithIconSpan">Create Playlist</span>
            </a>
          </li>
          <li className="listWithIcon">
            <a className="listWithIconLink" href="#">
              <HeartIcon />
              <span className="listWithIconSpan">Liked Songs</span>
            </a>
          </li>
        </ul>
        <hr className="border-t-[0.1px] border-[#282828]" />
        {playlists.map((playlist) => (
          <p
            key={playlist.id}
            onClick={() => setPlaylistId(playlist.id)}
            className={`delay-50 w-48 cursor-pointer truncate transition-all ease-in hover:text-white ${
              playlistId == playlist.id ? ' text-white' : ''
            }`}
          >
            {playlist.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
