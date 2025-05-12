import type { ArtworkData } from '~/types'
import ArtworkItem from '../artwork-item/artwork-item'
import styles from './artwork-grid.module.css'

function ArtworkList({ artworks }: { artworks: ArtworkData[] }) {
  return (
    <div className={styles.container}>
      {artworks.map((artwork: ArtworkData) => (
        <ArtworkItem key={artwork.id} artwork={artwork} />
      ))}
    </div>
  )
}

export default ArtworkList
