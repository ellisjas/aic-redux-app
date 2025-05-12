import { cache } from 'react'

const ARTWORK_FIELDS =
  'id,title,artist_title,image_id,date_display,thumbnail,description'

const BASE_URL = 'https://api.artic.edu/api/v1/artworks'
const LIMIT = 12

const getArtwork = cache(async () => {
  try {
    const response = await fetch(
      `${BASE_URL}?limit=${LIMIT}&fields=${ARTWORK_FIELDS}`,
    )

    const { data } = await response.json()

    return data
  } catch (error) {
    console.error(error)
    return []
  }
})

const getArtworkById = cache(async (id: string) => {
  const response = await fetch(`${BASE_URL}/${id}?fields=${ARTWORK_FIELDS}`)

  const { data } = await response.json()

  return data
})

export { getArtwork, getArtworkById }
