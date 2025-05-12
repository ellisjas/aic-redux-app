import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit'
import type {
  ArtworkData,
  ArtworkDetailResponse,
  ArtworkResponse,
} from '~/types'
import type { AppDispatch, RootState } from './store'

interface ArtworkState {
  artworks: ArtworkData[]
  selectedArtwork: ArtworkData | null
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: ArtworkState = {
  artworks: [],
  selectedArtwork: null,
  status: 'idle',
  error: null,
}

// const BASE_URL = 'ttps://corsproxy.io/?https://api.artic.edu/api/v1'

const CORS_PROXY = 'https://corsproxy.io/?https://api.artic.edu/api/v1/artworks'

const ARTWORK_FIELDS =
  'id,title,artist_title,image_id,date_display,thumbnail,description'

const ARTWORK_LIMIT = 12

const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState
  dispatch: AppDispatch
}>()

export const fetchArtworks = createAppAsyncThunk(
  'artworks/fetchArtworks',
  async () => {
    const response = await fetch(
      `${CORS_PROXY}?fields=${ARTWORK_FIELDS}&limit=${ARTWORK_LIMIT}`,
    )
    const data: ArtworkResponse = await response.json()
    console.log('API Response:', data)
    return data
  },
)

export const fetchArtworkById = createAppAsyncThunk(
  'artworks/fetchArtworkById',
  async (id: number) => {
    const response = await fetch(`${CORS_PROXY}/${id}?fields=${ARTWORK_FIELDS}`)
    const data: ArtworkDetailResponse = await response.json()
    return data.data
  },
)

const artworkSlice = createSlice({
  name: 'artwork',
  initialState,
  reducers: {
    setSelectedArtwork: (state, action: PayloadAction<ArtworkData | null>) => {
      state.selectedArtwork = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArtworks.pending, (state) => {
        state.status = 'pending'
        state.error = null
      })
      .addCase(fetchArtworks.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.artworks = action.payload.data
      })
      .addCase(fetchArtworks.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Failed to fetch artworks'
      })
      .addCase(fetchArtworkById.pending, (state) => {
        state.status = 'pending'
        state.error = null
      })
      .addCase(fetchArtworkById.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.selectedArtwork = action.payload
      })
      .addCase(fetchArtworkById.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Failed to fetch artwork'
      })
  },
})

export default artworkSlice.reducer

export const selectAllArtworks = (state: RootState) => state.artwork.artworks
export const selectArtworkById = (state: RootState, artworkId: number) => {
  return state.artwork.selectedArtwork?.id === artworkId
    ? state.artwork.selectedArtwork
    : state.artwork.artworks.find((artwork) => artwork.id === artworkId)
}

export const selectArtworkStatus = (state: RootState) => state.artwork.status

export const { setSelectedArtwork } = artworkSlice.actions
