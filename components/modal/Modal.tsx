import Image from 'next/image';
import React from 'react';

export const Modal = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-transparent z-[99999] flex items-center justify-center">
      <div className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-[0.8539]"></div>
      <div className="relative h-full w-full">
        <Image
          src="https://i.ibb.co/sCHBjdb/hero-large.jpg"
          alt="hero-large"
          width={0}
          height={0}
          className="w-full h-full"
          unoptimized
        />
      </div>
    </div>
  );
};
