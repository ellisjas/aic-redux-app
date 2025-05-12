import type { Route } from './+types/artwork'
import { store } from '~/store/store'
import styles from './artwork.module.css'
import { Link } from 'react-router'
import { getArtworkById } from '~/api/getArtwork'

export async function loader({ params }: Route.LoaderArgs) {
  const artworkId = params.artworkId
  return await getArtworkById(artworkId)
}

export function clientLoader({ params }: Route.ClientLoaderArgs) {
  const artworkId = Number(params.artworkId)
  return store
    .getState()
    .artwork.items.find((artwork) => artwork.id === artworkId)
}

export function HydrateFallback() {
  return <div>Loading...</div>
}

export default function Artwork({ loaderData }: Route.ComponentProps) {
  const artworkItem = loaderData

  if (!artworkItem) return <div>Artwork not found</div>

  const { image_id, title, artist_title } = artworkItem

  return (
    <div className={styles.container}>
      {image_id && (
        <img
          src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
          alt={title}
        />
      )}
      <h2>{title}</h2>
      <h3>{artist_title}</h3>
      <Link to="/" className={styles.backLink}>
        ← Back
      </Link>
    </div>
  )
}
