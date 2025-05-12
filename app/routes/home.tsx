import ArtworkGrid from '~/components/artwork-grid/artwork-grid'
import type { Route } from './+types/home'
import styles from './home.module.css'
import type { ArtworkData } from '~/types'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getArtwork } from '~/api/getArtwork'
import type { RootState } from '~/store/store'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Chicago Institute of Art' }]
}

export async function loader(): Promise<ArtworkData[]> {
  const artworks = await getArtwork()
  return artworks
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const artworks = loaderData
  const dispatch = useDispatch()
  const initialized = useSelector(
    (state: RootState) => state.artwork.initialized,
  )

  useEffect(() => {
    if (!initialized && artworks.length > 0) {
      dispatch({ type: 'artwork/setArtworks', payload: artworks })
    }
  }, [])

  return (
    <>
      <h1 className={styles.title}>Art Institute of Chicago</h1>
      {artworks.length > 0 && <ArtworkGrid artworks={artworks} />}
    </>
  )
}
