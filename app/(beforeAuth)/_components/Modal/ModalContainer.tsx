import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type ModalContainerProps = {
  children: ReactNode;
  text: string;
  authType: "login" | "signup";
  heightType: "loginHeight" | "signupHeight";
};

const ModalContainer = ({
  children,
  text,
  authType,
  heightType,
}: ModalContainerProps) => {
  const heights = {
    loginHeight: "h-[450px]",
    signupHeight: "h-[550px]",
  };

  return (
    <section
      id='model-background'
      className='w-screen h-full flex justify-center absolute inset-0 bg-black/[.3]'
    >
      <div
        id='modal'
        className={`relative flex flex-col max-w-[80%] min-w-[600px] top-[5%] bg-white rounded-2xl ${heights[heightType]}`}
      >
        <Header text={text} />

        <form className='flex flex-col flex-1'>
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
