import useSpotify from './useSpotify'
import { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { AlbumsState } from '../atoms/albumsAtom'
const useAlbums = () => {
  const spotifyApi = useSpotify()
  const [AlbumsInfo, setAlbumsInfo] = useState(null)

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const Album = await fetch(
          `https://api.spotify.com/v1/me/albums?offset=0&limit=20`,
          {
            headers: {
              Authorization: `Bearer ${spotifyApi.getAccessToken()}`,
            },
          }
        ).then((res) => res.json())
        setAlbumsInfo(Album)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAlbums()
  }, [spotifyApi])

  return AlbumsInfo
}

export default useAlbums
