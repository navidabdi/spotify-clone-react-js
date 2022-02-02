import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Main from '../components/Main'
import Player from '../components/Player'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-[#121212]">
      <main className="flex">
        <Sidebar />
        <Main />
      </main>
      <div className="sticky bottom-0 z-20">
        <Player />
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  return {
    props: {
      session,
    },
  }
}
