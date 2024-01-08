'use client';
import React, { useMemo } from 'react';
import { useGalleryContext } from '@/context/galleryContext';
import { useSlider } from '@/hooks/useSlider';
import { PaintI } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = ({ paintsInfo }: { paintsInfo: PaintI }) => {
  const context = useGalleryContext();
  const { nextItem, previusItem, itemIndex } = useSlider(context, paintsInfo);
  const getPorcentage = useMemo(
    () => (itemIndex + 1) * 6.66666667,
    [itemIndex]
  );

  return (
    <footer className="sticky bottom-0 sm:flex w-full h-20 bg-white z-50 flex flex-col gap-4 lg:static">
      <div className="bg-custom-flashWhite w-full h-[1px] relative">
        <div
          style={{
            width: `${getPorcentage}%`,
          }}
          className="bg-black absolute left-0 h-[1px]"
        ></div>
      </div>
      <div className="flex items-center justify-between w-full px-6 sm:px-10">
        <div className="flex flex-col gap-2">
          <h2 className="base-bold">{paintsInfo.name}</h2>
          <h3 className="text-[10px] text-black opacity-[0.7528] font-normal">
            {paintsInfo.artist.name}
          </h3>
        </div>
        <div className="flex items-center gap-6">
          <Link href={`/paint/${previusItem}`}>
            <Image
              src="/shared/icon-back-button.svg"
              alt="back-button"
              width={16}
              height={16}
            />
          </Link>
          <Link href={`/paint/${nextItem}`}>
            <Image
              src="/shared/icon-next-button.svg"
              alt="next-button"
              width={16}
              height={16}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};
