import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { ArtworkData } from '~/types'

interface ArtworkState {
  items: ArtworkData[]
  error: string | null
  initialized: boolean
}

const initialState: ArtworkState = {
  items: [],
  error: null,
  initialized: false,
}

const artworkSlice = createSlice({
  name: 'artwork',
  initialState,
  reducers: {
    setArtworks: (state, action: PayloadAction<ArtworkData[]>) => {
      state.items = action.payload
      state.initialized = true
    },
  },
})

export default artworkSlice.reducer
