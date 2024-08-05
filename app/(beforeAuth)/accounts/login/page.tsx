import ModalContainer from "@/app/(beforeAuth)/_components/Modal/ModalContainer";
import BasicInput from "@/app/(beforeAuth)/_components/Modal/BasicInput";

function Login() {
  return (
    <ModalContainer text='로그인하세요.' authType='login' heightType='loginHeight'>
      <BasicInput type='id' text='아이디' />
      <BasicInput type='password' text='비밀번호' />
    </ModalContainer>
  );
}

export default Login;
