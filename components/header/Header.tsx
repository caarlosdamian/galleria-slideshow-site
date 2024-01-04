import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
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
      <button className="link-one text-custom-gray">START SLIDESHOW</button>
    </nav>
  );
};
