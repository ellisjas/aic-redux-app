import type { Artwork } from "~/types";
import type { Route } from "./+types/home";
import { ArtworkItem } from "~/components";
import styles from './home.module.css';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Chicago Institute of Art" },
    { name: "description", content: "Chicago Institute of Art" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const artwork = await fetch('https://api.artic.edu/api/v1/artworks?limit=10')
  const artworkData = await artwork.json()
  return artworkData;
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { data } = loaderData
  return <div className={styles.artworkGrid}>{data.map((artwork: Artwork) => <ArtworkItem key={artwork.id} artwork={artwork} />)}</div>;
}
