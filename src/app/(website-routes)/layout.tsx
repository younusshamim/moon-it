import Footer from "@/app/shared/footer/footer";
import TopBar from "@/app/shared/topbar/topbar";
import { ReactNode } from "react";
import ConditionalNavbar from "../shared/navbar/conditional-navbar";

type PropsTypes = {
  children: ReactNode;
}

const Layout = ({ children }: PropsTypes) => {
  return (
    <div className="overflow-hidden">
      <TopBar />
      <ConditionalNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
