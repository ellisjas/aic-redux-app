import { useState, useEffect } from 'react'
import styles from './image-loader.module.css'

export enum ImageSize {
  LARGE = '843',
  SMALL = '600',
}

interface ImageProps {
  imageId: string
  thumbnail: string
  alt: string
  size: ImageSize
}

const IIIF_IMAGE_URL = 'https://www.artic.edu/iiif/2'

function ImageLoader({ imageId, thumbnail, alt, size }: ImageProps) {
  const [imageSrc, setImageSrc] = useState(thumbnail)

  const fullImageUrl = `${IIIF_IMAGE_URL}/${imageId}/full/${size},/0/default.jpg`

  useEffect(() => {
    const img = new Image()
    img.src = fullImageUrl
    img.onload = () => {
      setImageSrc(fullImageUrl)
    }
  }, [imageId])

  return <img src={imageSrc} alt={alt} className={styles.image} width={size} />
}

export default ImageLoader
