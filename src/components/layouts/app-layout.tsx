import React, { ReactNode } from "react";
import Layout from "./layout";
import Preloader from "../preloader/preloader";
import ScrollToTop from "../scroll-to-top/scroll-to-top";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <main className="main">{children}</main>
      <ScrollToTop />
      <Preloader />
    </Layout>
  );
};

export default AppLayout;
