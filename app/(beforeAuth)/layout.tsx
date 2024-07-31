import { ReactNode } from "react";

type BeforeAutoLayoutProps = {
  children: ReactNode;
};

function BeforeAutoLayout({ children }: BeforeAutoLayoutProps) {
  return <div>{children}</div>;
}

export default BeforeAutoLayout;
