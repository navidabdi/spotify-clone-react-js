import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'

export default function Home() {
  // console.log(process.env.NEXT_PUBLIC_CLIENT_SECRET)
  return (
    <div className="h-screen overflow-hidden bg-black">
      <main className="flex">
        <Sidebar />
        <Main />
      </main>
      <div>{/* Player */}</div>
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
