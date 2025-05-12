import { Link } from 'react-router'
import type { ArtworkData } from '~/types'
import styles from './artwork-item.module.css'
import { ImageLoader, ImageSize } from '~/components'

type ArtworkItemProps = {
  artwork: ArtworkData
}

function ArtworkItem({ artwork }: ArtworkItemProps) {
  return (
    <Link to={`/artwork/${artwork.id}`} className={styles.container}>
      <ImageLoader
        imageId={artwork.image_id}
        thumbnail={artwork.thumbnail.lqip}
        alt={artwork.title}
        size={ImageSize.SMALL}
      />
      <div className={styles.content}>
        <h2 className={styles.title}>{artwork.title}</h2>
        <p className={styles.artist}>{artwork.artist_display}</p>
      </div>
    </Link>
  )
}

export default ArtworkItem
