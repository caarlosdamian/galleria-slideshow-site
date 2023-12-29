import Image from 'next/image';

export const Header = () => {
  return (
    <nav className="w-full max-w-[1360px] flex items-center justify-between border-custom-platinum border-b-[1px] p-6 sm:p-7 2xl:py-10 2xl:px-0 2xl:mx-auto">
      <Image src="/shared/logo.svg" alt="logo" width={112} height={32} />
      <button className="link-one text-custom-gray">START SLIDESHOW</button>
    </nav>
  );
};
