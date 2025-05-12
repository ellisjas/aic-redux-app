import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes'

export default [
  layout('./layout.tsx', [
    index('routes/home.tsx'),
    route('artwork/:artworkId', './routes/artwork.tsx'),
  ]),
] satisfies RouteConfig
