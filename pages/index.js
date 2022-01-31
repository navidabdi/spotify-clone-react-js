import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
  // console.log(process.env.NEXT_PUBLIC_CLIENT_SECRET)
  return (
    <div className="h-screen overflow-hidden bg-black">
      <main>
        <Sidebar />
        {/* Center */}
      </main>
      <div>{/* Player */}</div>
    </div>
  )
}
