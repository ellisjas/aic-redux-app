import { configureStore } from '@reduxjs/toolkit';
import artworkReducer from './artworkSlice';

export const store = configureStore({
  reducer: {
    artwork: artworkReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 