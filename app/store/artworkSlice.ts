import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Artwork {
  id: number;
  title: string;
  artist_title: string;
  image_id: string;
  date_display: string;
  description: string;
}

interface ArtworkState {
  items: Artwork[];
  loading: boolean;
  error: string | null;
}

const initialState: ArtworkState = {
  items: [],
  loading: false,
  error: null,
};

const artworkSlice = createSlice({
  name: 'artwork',
  initialState,
  reducers: {
    setArtworks: (state, action: PayloadAction<Artwork[]>) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setArtworks, setLoading, setError } = artworkSlice.actions;
export default artworkSlice.reducer; 