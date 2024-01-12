'use client';
import { useModalContext } from '@/context/modalContextProvider';
import Image from 'next/image';

export const ViewButton = () => {
  const { setIsOpen } = useModalContext();
  return (
    <div className="bg-black bg-opacity-[0.7546] w-[152px] h-12 absolute top-4 left-4 flex items-center gap-3 px-4 py-[14px] sm:top-auto sm:bottom-4 cursor-pointer">
      <Image
        src="/shared/icon-view-image.svg"
        alt="view img icon"
        width={12}
        height={12}
      />
      <span
        className="text-[10px] text-white font-bold tracking-[2.143px] text-right leading-normal block"
        onClick={() => setIsOpen(true)}
      >
        VIEW IMAGE
      </span>
    </div>
  );
};
