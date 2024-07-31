type FooterProps = {
  type: "login" | "signup";
};

const Footer = ({ type }: FooterProps) => {
  return (
    <div id='modal-footer' className='px-20 py-6'>
      <button
        disabled
        className='w-full h-12 rounded-3xl bg-blackBtn text-white text-lg'
      >
        {type === "signup" ? "가입하기" : "로그인하기"}
      </button>
    </div>
  );
};

export default Footer;
