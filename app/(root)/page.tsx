import { Gallery } from '@/components/gallery/Gallery';
import { PaintI } from '@/types';

const getData = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/paints`);
    const body = await res.json();
    return body;
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  const paintsInfo: PaintI[] = await getData();
  return (
    <section className="w-ful p-6 sm:p-10 flex items-center justify-center">
      <Gallery paintInfo={paintsInfo} />
    </section>
  );
}
