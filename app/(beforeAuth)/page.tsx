import Image from "next/image";
import Link from "next/link";
import EMO_LOGO from "../../public/EMO_Icon.png";

const commonLinkStyle =
  "flex justify-center items-center w-[300px] h-10 rounded-[20px] text-base";

export default function Home() {
  return (
    <div className='flex flex-row bg-white w-lvw h-lvh'>
      <div className='flex-1  flex justify-center items-center bg-orange'>
        <div>
          <Image src={EMO_LOGO} alt='logo' priority />
        </div>
      </div>
      <div className='flex-1  flex flex-col justify-center pl-10'>
        <h1 className='text-6xl font-bold my-12 text-stone-800'>
          이재료로 모해먹지?
        </h1>
        <h2 className='text-3xl font-bold mb-8 text-stone-800'>지금 가입하세요.</h2>
        <Link
          href='/accounts/signup'
          className={`${commonLinkStyle} bg-orange text-white hover:bg-orange-hover`}
        >
          회원가입
        </Link>
        <h3 className='text-xl font-bold mt-10 mb-5 text-stone-800'>
          이미 EMO에 가입하셨나요?
        </h3>
        <Link
          href='/accounts/login'
          className={`${commonLinkStyle} text-blue border border-1 border-ivory hover:bg-ivory-hover`}
        >
          로그인
        </Link>
      </div>
    </div>
  );
}
