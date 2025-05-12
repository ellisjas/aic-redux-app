import type { Route } from './+types/home'
import styles from './home.module.css'
import ArtworkGrid from '~/components/artwork-grid/artwork-grid'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Chicago Institute of Art' }]
}

export default function Home() {
  // const dispatch = useDispatch<AppDispatch>()
  // const artworks = useSelector(selectAllArtworks)
  // const status = useSelector(selectArtworkStatus)

  // useEffect(() => {
  //   dispatch(fetchArtworks())
  // }, [dispatch])

  // if (status === 'pending') return <div>Loading...</div>
  // if (status === 'failed') return <div>Error</div>

  return (
    <>
      <h1 className={styles.title}>Art Institute of Chicago</h1>
      <ArtworkGrid />
    </>
  )
}
