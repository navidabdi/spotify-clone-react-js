import { ChevronDownIcon } from '@heroicons/react/outline'
import { useSession, signOut } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { shuffle } from 'lodash'
import { useRecoilState, useRecoilValue } from 'recoil'
import { playlistState, playlistIdState } from '../atoms/playlistAtom'
import useSpotify from '../hooks/useSpotify'
import Songs from './Songs'
import { MenuBarIcon } from './SpotifyIcons'
import { sidebarTrigerAtom } from '../atoms/sidebarTrigerAtom'

const Main = () => {
  const { data: session } = useSession()

  const colors = [
    'from-indigo-900',
    'from-orange-900',
    'from-amber-900',
    'from-lime-900',
    'from-emerald-900',
    'from-teal-900',
    'from-indigo-900',
    'from-blue-900',
    'from-green-900',
    'from-red-900',
    'from-yellow-900',
    'from-pink-900',
    'from-purple-900',
    'from-indigo-600',
    'from-blue-600',
    'from-green-600',
    'from-red-600',
    'from-yellow-600',
    'from-pink-600',
    'from-purple-600',
    'from-indigo-500',
    'from-blue-500',
    'from-green-500',
    'from-red-500',
    'from-yellow-500',
    'from-pink-500',
    'from-purple-500',
  ]
  const [color, setColor] = useState(null)
  const playlistId = useRecoilValue(playlistIdState)

  const [playlist, setPlaylist] = useRecoilState(playlistState)
  const [sidebarTriger, setSidebarTriger] = useRecoilState(sidebarTrigerAtom)
  const spotifyApi = useSpotify()

  useEffect(() => {
    setColor(shuffle(colors).pop())
  }, [playlistId])

  useEffect(() => {
    spotifyApi
      .getPlaylist(playlistId)
      .then((data) => {
        setPlaylist(data.body)
      })
      .catch((err) => console.log('Somting went wrong!', err))
  }, [spotifyApi, playlistId])

  return (
    <div
      className={` h-screen w-[80%] flex-grow overflow-y-scroll transition-all delay-200 ease-out scrollbar-hide md:ml-[250px] ${
        sidebarTriger ? 'ml-[180px]' : 'ml-0'
      }`}
    >
      <div className="relative">
        <button
          onClick={() => setSidebarTriger(!sidebarTriger)}
          className="absolute top-5 left-8 flex h-[23px] flex-col justify-between  md:hidden"
        >
          <MenuBarIcon />
        </button>
        <header className="absolute top-5 right-5">
          <div
            onClick={() => signOut()}
            className="flex cursor-pointer items-center space-x-3 rounded-full bg-black p-1 pr-2 text-white opacity-90 hover:opacity-80"
          >
            <img
              className="h-7 w-7 rounded-full"
              src={session?.user.image}
              alt={session?.user.name}
            />
            <h3 className="">{session?.user.name}</h3>
            <ChevronDownIcon className="h-5 w-5" />
          </div>
        </header>
        <section
          className={`item-end flex space-x-7 bg-gradient-to-b py-20 ${color} to-[#121212] p-8 text-white`}
        >
          <div className="flex flex-col space-x-3 md:flex-row">
            <img
              className="h-52 w-52 object-cover shadow-2xl"
              src={playlist?.images?.[0]?.url}
              alt=""
            />
            <div className="mt-3 flex flex-col space-y-2 md:mt-0 md:space-y-5 md:self-end">
              <p className="text-sm font-bold opacity-70">PLAYLIST</p>
              <h1 className="text-2xl font-bold md:text-3xl xl:text-6xl">
                {playlist?.name}
              </h1>
              <p className="text-md opacity-75">{playlist?.description}</p>
            </div>
          </div>
        </section>
      </div>
      <div>
        <Songs />
      </div>
    </div>
  )
}

export default Main
