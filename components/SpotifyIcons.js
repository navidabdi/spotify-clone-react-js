import { useRecoilState } from 'recoil'
import { sidebarTrigerAtom } from '../atoms/sidebarTrigerAtom'

export const NextIcon = () => {
  return (
    <svg
      className="button"
      role="img"
      height="16"
      width="16"
      viewBox="0 0 16 16"
    >
      <path d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z"></path>
    </svg>
  )
}

export const RepeatIcon = () => {
  return (
    <svg
      className="button"
      role="img"
      height="16"
      width="16"
      viewBox="0 0 16 16"
    >
      <path d="M5.5 5H10v1.5l3.5-2-3.5-2V4H5.5C3 4 1 6 1 8.5c0 .6.1 1.2.4 1.8l.9-.5C2.1 9.4 2 9 2 8.5 2 6.6 3.6 5 5.5 5zm9.1 1.7l-.9.5c.2.4.3.8.3 1.3 0 1.9-1.6 3.5-3.5 3.5H6v-1.5l-3.5 2 3.5 2V13h4.5C13 13 15 11 15 8.5c0-.6-.1-1.2-.4-1.8z"></path>
    </svg>
  )
}

export const PrevIcon = () => {
  return (
    <svg
      className="button"
      role="img"
      height="16"
      width="16"
      viewBox="0 0 16 16"
    >
      <path d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z"></path>
    </svg>
  )
}
export const PlayIcon = () => {
  return (
    <svg
      className="button"
      role="img"
      height="16"
      width="16"
      viewBox="0 0 16 16"
    >
      <path d="M4.018 14L14.41 8 4.018 2z"></path>
    </svg>
  )
}
export const PauseIcon = () => {
  return (
    <svg
      className="button"
      role="img"
      height="16"
      width="16"
      viewBox="0 0 16 16"
    >
      <path fill="none" d="M0 0h16v16H0z"></path>
      <path d="M3 2h3v12H3zm7 0h3v12h-3z"></path>
    </svg>
  )
}

export const ShuffleIcon = () => {
  return (
    <svg
      className="button"
      role="img"
      height="16"
      width="16"
      viewBox="0 0 16 16"
    >
      <path d="M4.5 6.8l.7-.8C4.1 4.7 2.5 4 .9 4v1c1.3 0 2.6.6 3.5 1.6l.1.2zm7.5 4.7c-1.2 0-2.3-.5-3.2-1.3l-.6.8c1 1 2.4 1.5 3.8 1.5V14l3.5-2-3.5-2v1.5zm0-6V7l3.5-2L12 3v1.5c-1.6 0-3.2.7-4.2 2l-3.4 3.9c-.9 1-2.2 1.6-3.5 1.6v1c1.6 0 3.2-.7 4.2-2l3.4-3.9c.9-1 2.2-1.6 3.5-1.6z"></path>
    </svg>
  )
}
export const SpotifyLogo = () => {
  return (
    <svg viewBox="0 0 1134 340">
      <title>Spotify</title>
      <path
        fill="white"
        d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"
      ></path>
    </svg>
  )
}
export const HomeIcon = () => {
  return (
    <svg fill="white" role="img" height="24" width="24" viewBox="0 0 24 24">
      <path d="M9 14h6v7h5V7.8l-8-4.6-8 4.6V21h5v-7zm1 8H3V7.2L12 2l9 5.2V22h-7v-7h-4v7z"></path>
    </svg>
  )
}
export const SearchIcon = () => {
  return (
    <svg fill="white" role="img" height="24" width="24" viewBox="0 0 24 24">
      <path d="M16.387 16.623A8.47 8.47 0 0019 10.5a8.5 8.5 0 10-8.5 8.5 8.454 8.454 0 005.125-1.73l4.401 5.153.76-.649-4.399-5.151zM10.5 18C6.364 18 3 14.636 3 10.5S6.364 3 10.5 3 18 6.364 18 10.5 14.636 18 10.5 18z"></path>
    </svg>
  )
}
export const LibraryIcon = () => {
  return (
    <svg fill="white" role="img" height="24" width="24" viewBox="0 0 24 24">
      <path d="M13.66 4.097l-.913.406 7.797 17.513.914-.406L13.66 4.097zM3 22h1V4H3v18zm6 0h1V4H9v18z"></path>
    </svg>
  )
}
export const AddIcon = () => {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-white">
      <svg role="img" height="12" width="12" viewBox="0 0 16 16">
        <path d="M14 7H9V2H7v5H2v2h5v5h2V9h5z"></path>
        <path fill="none" d="M0 0h16v16H0z"></path>
      </svg>
    </div>
  )
}
export const HeartIcon = () => {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-[linear-gradient(135deg,#450af5,#c4efd9)]">
      <svg fill="white" role="img" height="12" width="12" viewBox="0 0 16 16">
        <path fill="none" d="M0 0h16v16H0z"></path>
        <path d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z"></path>
      </svg>
    </div>
  )
}
export const MenuBarIcon = () => {
  const [sidebarTriger, setSidebarTriger] = useRecoilState(sidebarTrigerAtom)
  return (
    <>
      <div
        className={`block h-[2px] rounded-full bg-white transition-all  delay-500 ease-out ${
          sidebarTriger ? 'w-10' : 'w-6'
        }`}
      ></div>
      <div
        className={`block h-[2px] rounded-full bg-white transition-all  delay-500 ease-out ${
          sidebarTriger ? 'w-8' : 'w-8'
        }`}
      ></div>
      <div
        className={`block h-[2px] rounded-full bg-white transition-all  delay-500 ease-out ${
          sidebarTriger ? 'w-6' : 'w-10'
        }`}
      ></div>
    </>
  )
}
