import { ChevronDownIcon } from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { shuffle } from 'lodash'

const Main = () => {
  const { data: session } = useSession()

  const colors = [
    'from-indigo-500',
    'from-blue-500',
    'from-green-500',
    'from-red-500',
    'from-yellow-500',
    'from-pink-500',
    'from-purple-500',
  ]
  const [color, setColor] = useState(null)

  useEffect(() => {
    setColor(shuffle(colors).pop())
  }, [])

  return (
    <div className="flex-grow">
      <header className="absolute top-5 right-8">
        <div className="flex cursor-pointer items-center space-x-3 rounded-full bg-black p-1 pr-2 text-white opacity-90 hover:opacity-80">
          <img
            className="h-10 w-10 rounded-full"
            src={session?.user.image}
            alt={session?.user.name}
          />
          <h3 className="">{session?.user.name}</h3>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>
      <section
        className={`item-end flex h-80 space-x-7 bg-gradient-to-b ${color} to-black p-8 text-white`}
      >
        <img src="" alt="" />
      </section>
    </div>
  )
}

export default Main
