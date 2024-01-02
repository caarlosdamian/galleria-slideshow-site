export interface PaintI {
  name: string;
  year: number;
  description: string;
  source: string;
  artist: Artist;
  images: Images;
  _id: string;
}

interface Images {
  thumbnail: string;
  hero: Hero;
  gallery: string;
}

interface Hero {
  small: string;
  large: string;
}

interface Artist {
  image: string;
  name: string;
}
