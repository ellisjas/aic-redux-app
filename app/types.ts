type ArtworkData = {
  id: number
  title: string
  artist_display: string
  artist_title?: string
  image_id: string
  thumbnail: {
    lqip: string
  }
  date_display: string
  description: string
}

export interface ArtworkResponse {
  data: ArtworkData[]
  pagination: {
    total: number
    current_page: number
    total_pages: number
  }
  config: {
    iiif_url: string
  }
}

export interface ArtworkDetailResponse {
  data: ArtworkData
}

export type { ArtworkData }
