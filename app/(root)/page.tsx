import { PaintI } from '@/types';
import Image from 'next/image';

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
  const data: PaintI[] = await getData();
  return (
    <section className="w-ful p-6 sm:p-10">
      {/* flex flex-wrap */}
      {/* columns-4 gap-x-10 gap-y-10 */}
      <div className="h-full">
        {data.map((item, index) => (
          <div className={`h-fit  bg-green-600 w-[310px] mb-10`} key={''}>
            <Image
              src={item.images.thumbnail}
              alt={`${item.name}-thumnbnail`}
              width={0}
              height={0}
              unoptimized
              className={`w-full h-full object-contain`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
