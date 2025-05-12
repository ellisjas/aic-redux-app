import { configureStore } from '@reduxjs/toolkit'
import artworkReducer from '~/features/artwork/artworkSlice'

export const store = configureStore({
  reducer: {
    artwork: artworkReducer,
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
