import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectAllArtworks,
  selectArtworkStatus,
  fetchArtworks,
} from '~/store/artworkSlice'
import type { AppDispatch } from '~/store/store'
import type { ArtworkData } from '~/types'
import ArtworkItem from '../artwork-item/artwork-item'
import styles from './artwork-grid.module.css'

function ArtworkList() {
  const dispatch = useDispatch<AppDispatch>()
  const artworks = useSelector(selectAllArtworks)
  const status = useSelector(selectArtworkStatus)

  useEffect(() => {
    dispatch(fetchArtworks())
  }, [])

  if (status === 'pending') return <div>Loading...</div>
  if (status === 'failed') return <div>Error</div>

  return (
    <div className={styles.container}>
      {artworks.map((artwork: ArtworkData) => (
        <ArtworkItem key={artwork.id} artwork={artwork} />
      ))}
    </div>
  )
}

export default ArtworkList
