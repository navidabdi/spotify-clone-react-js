import React from 'react'
import Sidebar from '../components/Sidebar'
import { useRecoilValue } from 'recoil'
import Player from '../components/Player'
import MyAlbums from '../components/MyAlbums'
import { sidebarTrigerAtom } from '../atoms/sidebarTrigerAtom'
const Albums = () => {
  const sidebarTriger = useRecoilValue(sidebarTrigerAtom)
  return (
    <div className="h-screen overflow-hidden bg-[#121212]">
      <main className="flex">
        <Sidebar />
        <div
          className={` h-screen w-[80%] flex-grow overflow-y-scroll p-8 transition-all delay-200 ease-out scrollbar-hide md:ml-[250px] ${
            sidebarTriger ? 'ml-[180px]' : 'ml-0'
          }`}
        >
          <MyAlbums />
        </div>
      </main>
      <div className="sticky bottom-0 z-20">
        <Player />
      </div>
    </div>
  )
}

export default Albums
