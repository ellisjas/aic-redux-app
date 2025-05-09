import { Link } from 'react-router';
import type { Artwork } from '~/types';
import styles from './artwork-item.module.css';

type ArtworkItemProps = {
  artwork: Artwork;
}

function ArtworkItem({ artwork }: ArtworkItemProps) {
  const imageUrl = artwork.image_id
    ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`
    : 'https://via.placeholder.com/150';

  return (
    <Link to={`/artwork/${artwork.id}`} className={styles.container}>
      <img src={imageUrl} alt={artwork.title} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title}>{artwork.title}</h2>
        <p className={styles.artist}>{artwork.artist_display}</p>
      </div>
    </Link>
  );
}

export default ArtworkItem;