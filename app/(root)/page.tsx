import { Gallery } from '@/components/gallery/Gallery';
import { getData } from '@/services';
import { PaintI } from '@/types';

export default async function Home() {
  const paintsInfo: PaintI[] = await getData('/api/paints');
  return (
    <section className="w-ful p-6 sm:p-10 flex items-center justify-center">
      <Gallery paintInfo={paintsInfo} />
    </section>
  );
}
