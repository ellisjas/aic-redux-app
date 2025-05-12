import type { Route } from './+types/artwork'
import { store } from '~/store/store'
import styles from './artwork.module.css'
import { Link } from 'react-router'
import { getArtworkById } from '~/api/getArtwork'
import ImageLoader, { ImageSize } from '~/components/image-loader/image-loader'

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
      <ImageLoader
        imageId={image_id}
        thumbnail={artworkItem.thumbnail.lqip}
        alt={title}
        size={ImageSize.LARGE}
      />
      <h2>{title}</h2>
      <h3>{artist_title}</h3>
      <Link to="/" className={styles.backLink}>
        ← Back
      </Link>
    </div>
  )
}
