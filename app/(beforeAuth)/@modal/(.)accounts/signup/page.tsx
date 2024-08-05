import ModalContainer from "@/app/(beforeAuth)/_components/Modal/ModalContainer";
import BasicInput from "@/app/(beforeAuth)/_components/Modal/BasicInput";

export default function Signup() {
  return (
    <>
      난 가로채기지롱
      <ModalContainer
        text='계정을 생성하세요.'
        authType='signup'
        heightType='signupHeight'
      >
        <BasicInput type='id' text='아이디' />
        <BasicInput type='name' text='닉네임' />
        <BasicInput type='password' text='비밀번호' />

        <div id='inner-div' className='flex flex-col h-14 relative my-3'>
          <label
            htmlFor='image'
            className='absolute top-0 w-full h-14 inline-block border border-1 border-ivory rounded text-sm px-2 pt-2 text-gray-700'
          >
            프로필
          </label>
          <input
            id='image'
            type='file'
            accept='image/*'
            className='w-full border-none text-base mt-4 px-2 pt-3 pb-2 outline-none'
          />
        </div>
      </ModalContainer>
    </>
  );
}
