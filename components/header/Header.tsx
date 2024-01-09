'use client';
import { useGalleryContext } from '@/context/galleryContext';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useMemo } from 'react';

export const Header = () => {
  const pathName = usePathname();
  const router = useRouter();
  const isShowActive = useMemo(() => pathName !== '/', [pathName]);
  const paints = useGalleryContext();
  return (
    <nav className="w-full max-w-[1360px] flex items-center justify-between border-custom-platinum border-b-[1px] p-6 sm:p-7 2xl:py-10 2xl:px-0 2xl:mx-auto">
      <Link href="/">
        <Image
          src="/shared/logo.svg"
          alt="logo"
          width={112}
          height={32}
          className="object-contain"
        />
      </Link>
      <button
        className="link-one text-custom-gray"
        onClick={() =>
          router.push(`${isShowActive ? '/' : `paint/${paints[0]._id}/`}`)
        }
      >
        {isShowActive ? 'STOP SLIDESHOW' : 'START SLIDESHOW'}
      </button>
    </nav>
  );
};
