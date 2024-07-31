"use client";

import { useRouter } from "next/navigation";

type ModalHeaderProps = {
  text: string;
};

const Header = ({ text }: ModalHeaderProps) => {
  const router = useRouter();
  const onClickCloseModal = () => {
    router.back();
  };

  return (
    <div id='modal-header' className='pt-9 pb-5 px-20 text-3xl font-bold'>
      <button
        className='w-9 h-9 border-none rounded-2xl cursor-pointer bg-white left-4 top-4 flex justify-center items-center absolute hover:bg-blackBtn-modalBg'
        onClick={onClickCloseModal}
      >
        <svg
          width={24}
          viewBox='0 0 24 24'
          aria-hidden='true'
          className='r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03'
        >
          <g>
            <path d='M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z'></path>
          </g>
        </svg>
      </button>
      <div>{text}</div>
    </div>
  );
};

export default Header;
