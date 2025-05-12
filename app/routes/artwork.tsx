import { useSelector, useDispatch } from 'react-redux'
import type { Route } from './+types/artwork'
import type { AppDispatch, RootState } from '~/store/store'
import {
  fetchArtworkById,
  selectArtworkById,
  selectArtworkStatus,
} from '~/store/artworkSlice'
import styles from './artwork.module.css'
import { Link } from 'react-router'
import { useEffect } from 'react'

export default function Artwork({ params }: Route.ComponentProps) {
  const artworkId = Number(params.artworkId)
  const dispatch = useDispatch<AppDispatch>()

  const artwork = useSelector((state: RootState) =>
    selectArtworkById(state, artworkId),
  )
  const status = useSelector(selectArtworkStatus)

  useEffect(() => {
    if (status === 'idle' && !artwork) {
      dispatch(fetchArtworkById(artworkId))
    }
  }, [dispatch, artworkId, status])

  switch (status) {
    case 'idle':
      return <div>Loading...</div>
    case 'pending':
      return <div>Loading...</div>
    case 'failed':
      return <div>Error loading artwork</div>
  }

  if (!artwork) return <div>Artwork not found</div>

  return (
    <div className={styles.container}>
      {artwork.image_id && (
        <img
          src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
          alt={artwork.title}
        />
      )}
      <h2>{artwork.title}</h2>
      <h3>{artwork.artist_title}</h3>
      <Link to="/" className={styles.backLink}>
        ← Back
      </Link>
    </div>
  )
}
