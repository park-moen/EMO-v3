import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type ModalContainerProps = {
  children: ReactNode;
  text: string;
  authType: "login" | "signup";
};

const ModalContainer = ({ children, text, authType }: ModalContainerProps) => {
  return (
    <section
      id='model-background'
      className='w-screen h-full flex justify-center absolute inset-0 bg-black/[.3]'
    >
      <div
        id='modal'
        className='relative flex flex-col max-w-[80%] min-w-[600px] h-[550px] top-[5%] bg-white rounded-2xl'
      >
        <Header text={text} />

        <form className='flex flex-col flex-1 border'>
          <div id='modal-body' className='flex-1 px-20'>
            {children}
          </div>

          <Footer type={authType} />
        </form>
      </div>
    </section>
  );
};

export default ModalContainer;
