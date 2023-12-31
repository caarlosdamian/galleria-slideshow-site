import { PaintI } from '@/types';
import Image from 'next/image';

export const Gallery = ({ data }: { data: PaintI[] }) => {
  return (
    <div className="h-full columns-1 gap-6 lg:gap-10 sm:columns-2 lg:columns-4 ">
      {data.map((item) => (
        <div className="h-fit w-[310px] mb-6 lg:mb-10" key={''}>
          <Image
            src={item.images.thumbnail}
            alt={`${item.name}-thumnbnail`}
            width={0}
            height={0}
            unoptimized
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};
