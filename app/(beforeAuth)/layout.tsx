import { ReactNode } from "react";

type BeforeAuthLayoutProps = {
  children: ReactNode;
  modal: ReactNode;
};

function BeforeAuthLayout({ children, modal }: BeforeAuthLayoutProps) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}

export default BeforeAuthLayout;
