import { Link } from 'react-router'
import type { ArtworkData } from '~/types'
import styles from './artwork-item.module.css'
import { useEffect, useState } from 'react'

type ArtworkItemProps = {
  artwork: ArtworkData
}

const IIIF_IMAGE_URL = 'https://www.artic.edu/iiif/2'

function ArtworkItem({ artwork }: ArtworkItemProps) {
  const [imageSrc, setImageSrc] = useState(artwork.thumbnail.lqip)
  // const imageSrc = artwork.thumbnail.lqip
  //   ? artwork.thumbnail.lqip
  //   : `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`

  const fullImageUrl = `${IIIF_IMAGE_URL}/${artwork.image_id}/full/843,/0/default.jpg`

  useEffect(() => {
    if (artwork.image_id) {
      const img = new Image()
      img.src = fullImageUrl
      img.onload = () => {
        setImageSrc(fullImageUrl)
      }
    }
  }, [artwork.image_id])

  return (
    <Link to={`/artwork/${artwork.id}`} className={styles.container}>
      <img src={imageSrc} alt={artwork.title} className={styles.image} />
      {/* <Image
        src={imageSrc}
        alt={artwork.title}
      /> */}
      <div className={styles.content}>
        <h2 className={styles.title}>{artwork.title}</h2>
        <p className={styles.artist}>{artwork.artist_display}</p>
      </div>
    </Link>
  )
}

export default ArtworkItem
