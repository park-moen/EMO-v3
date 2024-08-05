import { ReactNode } from "react";

type BasicInputProps = {
  type: "name" | "id" | "password";
  text: "아이디" | "닉네임" | "비밀번호";
  children?: ReactNode;
};

const BasicInput = ({ type, text, children }: BasicInputProps) => {
  // Input type이 image와 같이 특별한 Element로 children을 받는 경우
  if (children) {
    <div id='inner-div' className='flex flex-col h-14 relative my-3'>
      <label
        htmlFor={type}
        className='absolute top-0 w-full h-14 inline-block border border-1 border-ivory rounded text-sm px-2 pt-2 text-gray-700'
      >
        {text}
      </label>
      {children}
    </div>;
  }

  // Modal에서 기본 Style
  return (
    <div id='inner-div' className='flex flex-col h-14 relative my-3'>
      <label
        htmlFor={type}
        className='absolute top-0 w-full h-14 inline-block border border-1 border-ivory rounded text-sm px-2 pt-2 text-gray-700'
      >
        {text}
      </label>
      <input
        id={type}
        type={type === "password" ? "password" : "text"}
        className='w-full border-none text-base mt-4 px-2 pt-3 pb-2 outline-none'
      />
    </div>
  );
};

export default BasicInput;
