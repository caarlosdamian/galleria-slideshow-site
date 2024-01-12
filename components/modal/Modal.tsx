'use client';
import { useModalContext } from '@/context/modalContextProvider';
import Image from 'next/image';
import React from 'react';

export const Modal = ({ img }: { img: string }) => {
  const { isOpen, setIsOpen } = useModalContext();
  return (
    <div
      className={`${
        isOpen ? 'fixed' : 'hidden'
      } top-0 left-0 w-screen h-screen bg-transparent z-[99999] flex items-center justify-center px-6`}
    >
      <div
        className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-[0.8539]"
        onClick={() => setIsOpen(false)}
      ></div>
      <div className="relative">
        <Image
          src={img}
          alt="hero-large"
          width={0}
          height={0}
          className="w-full h-full object-contain"
          unoptimized
        />
      </div>
    </div>
  );
};
