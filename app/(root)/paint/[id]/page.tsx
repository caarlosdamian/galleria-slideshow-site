import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/footer/Footer';
import { getData } from '@/services';
import { PaintI } from '@/types';

const PaintDetails = async ({ params }: { params: { id: string } }) => {
  const paintsInfo: PaintI = await getData(`/api/paints/${params.id}`);
  return (
    <div className="flex items-center justify-center flex-col pt-6 gap-24 sm:pt-10 sm:gap-16">
      <div className="px-6 sm:px-10 w-full">
        <div className="relative w-[327px] h-[280px] sm:w-[457px] sm:h-[560px] sm:self-start">
          <Image
            src={paintsInfo.images.gallery}
            alt=""
            fill
            className="absolute object-cover"
            unoptimized
          />
          <div className="bg-black bg-opacity-[0.7546] w-[152px] h-12 absolute top-4 left-4 flex items-center gap-3 px-4 py-[14px] sm:top-auto sm:bottom-4">
            <Image
              src="/shared/icon-view-image.svg"
              alt="view img icon"
              width={12}
              height={12}
            />
            <span className="text-[10px] text-white font-bold tracking-[2.143px] text-right leading-normal">
              VIEW IMAGE
            </span>
          </div>
          <div className="absolute bottom-[-54px] left-[-1px] sm:bottom-auto sm:top-[-1px] sm:left-[253px] sm:w-full">
            <div className="relative bg-white  w-[280px] p-6 flex flex-col gap-2 sm:w-full sm:pt-0 sm:px-16 sm:pb-16">
              <h2 className="h2-bold sm:h1-bold">{paintsInfo.name}</h2>
              <p className="paragraph-regular text-custom-gray">
                {paintsInfo.artist.name}
              </p>
              <Image
                src={paintsInfo.artist.image}
                alt="artist-img"
                width={0}
                height={0}
                className="absolute h-16 w-16 bottom-[-64px] left-4 sm:w-32 sm:h-32 sm:bottom-[-128px] sm:left-[220px]  object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-full px-5 flex flex-col gap-10 pt-[74px] sm:px-[156px]">
        <h1 className="absolute top-0 text-[100px] font-bold leading-[100px] text-custom-flashWhite justify-self-start self-end sm:self-start sm:text-[200px] sm:leading-[150px] sm:left-16">
          {paintsInfo.year}
        </h1>
        <h3 className="z-30 base-medium text-custom-gray text-start">
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
      <Footer paintsInfo={paintsInfo} />
    </div>
  );
};

export default PaintDetails;
