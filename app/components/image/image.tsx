import { useState, useEffect } from 'react'
import styles from './image.module.css'

type ImageProps = {
  imageId: string
  thumbnail: string
  alt: string
}

const IIIF_IMAGE_URL = 'https://www.artic.edu/iiif/2'

function ArtworkImage({ imageId, thumbnail, alt }: ImageProps) {
  // const [currentImageUrl, setCurrentImageUrl] = useState(thumbnail)

  // const fullImageUrl = imageId
  //   ? `${IIIF_IMAGE_URL}/${imageId}/full/843,/0/default.jpg`
  //   : thumbnail

  // useEffect(() => {
  //   if (imageId) {
  //     setTimeout(() => {
  //       const img = new Image()
  //       img.src = fullImageUrl
  //       img.onload = () => {
  //         setCurrentImageUrl(fullImageUrl)
  //       }
  //     }, 100_000)
  //   }
  // }, [imageId, thumbnail, currentImageUrl])

  return <img src={thumbnail} alt={alt} className={styles.image} />
}

export default ArtworkImage
