import { FC, PropsWithChildren } from "react";
import Header from "../header/header";

interface DefaultLayoutProps {
  offwhite?: boolean;
  footer?: boolean;
}

const DefaultLayout: FC<PropsWithChildren<DefaultLayoutProps>> = ({
  children,
}) => {
  return (
    <div>
      <Header />
      <main className="min-h-screen">
        <div className="px-5 xl:px-5">{children}</div>
      </main>
    </div>
  );
};

export default DefaultLayout;
