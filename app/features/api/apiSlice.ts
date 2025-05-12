import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = 'https://api.artic.edu/api/v1'
const ARTWORKS_ENDPOINT = 'artworks?limit=12'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getArtworks: builder.query({
      query: () => ARTWORKS_ENDPOINT,
    }),
  }),
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetArtworksQuery } = apiSlice
