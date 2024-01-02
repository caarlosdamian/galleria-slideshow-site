import { PaintI } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export const CardImg = ({ item }: { item: PaintI }) => {
  return (
    <div className="group relative h-fit w-[327px] sm:w-[324px] lg:w-[310px] mb-6 lg:mb-10">
      <Link href={`/paint/${item._id}`}>
        <div className="absolute bottom-8 left-8 flex flex-col gap-[6px] z-30 sm:gap-2">
          <h2 className="h2-bold text-white">{item.name}</h2>
          <p className="paragraph-small text-white text-opacity-[0.7528]">
            {item.artist.name}
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full hidden group-hover:block bg-white hover:bg-gradient-to-t hover:from-black hover:to-transparent bg-opacity-25"></div>

        <Image
          src={item.images.thumbnail}
          alt={`${item.name}-thumnbnail`}
          width={0}
          height={0}
          unoptimized
          className="w-full h-full object-contain"
        />
      </Link>
    </div>
  );
};
