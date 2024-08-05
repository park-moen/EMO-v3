import { ReactNode } from "react";

type AfterAuthLayoutProps = {
  children: ReactNode;
};

function AfterAuthLayout({ children }: AfterAuthLayoutProps) {
  return <div>{children}</div>;
}

export default AfterAuthLayout;
