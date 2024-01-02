import { getData } from '@/services';
import { PaintI } from '@/types';
import console from 'console';
import Image from 'next/image';
import Link from 'next/link';

const PaintDetails = async ({ params }: { params: { id: string } }) => {
  const paintsInfo: PaintI = await getData(`/api/paints/${params.id}`);
  console.log(paintsInfo);
  return (
    <div className="flex items-center justify-center flex-col pt-6 gap-24">
      <div className="relative w-[327px] h-[280px]">
        <div className=""></div>
        <Image
          src={paintsInfo.images.gallery}
          alt=""
          fill
          className="absolute"
          unoptimized
          objectFit="cover"
        />
        <div className="bg-white min-h-[104px] w-[280px] absolute bottom-[-54px] left-[-1px] p-6 flex flex-col gap-2">
          <h2 className="h2-bold">{paintsInfo.name}</h2>
          <p className="paragraph-regular text-custom-gray">
            {paintsInfo.artist.name}
          </p>
        </div>
        <Image
          src={paintsInfo.artist.image}
          alt=""
          width={64}
          height={64}
          className="absolute bottom-[-118px] left-4"
          unoptimized
          objectFit="cover"
        />
      </div>
      <div className="relative w-full h-full px-5 flex flex-col gap-10 pt-[74px]">
        <h1 className="absolute top-0 text-[100px] font-bold leading-[100px] text-custom-flashWhite justify-self-start self-end">
          {paintsInfo.year}
        </h1>
        <h3 className="z-30 base-medium text-custom-gray text-start	">
          {paintsInfo.description}
        </h3>
        <Link
          href={paintsInfo.source}
          className="link-two text-custom-gray"
          target="_blank"
          rel="noopener noreferrer"
        >
          GO TO SOURCE
        </Link>
      </div>
      <footer className="sticky bottom-0 bg-red-500 w-full h-8"></footer>
    </div>
  );
};

export default PaintDetails;
