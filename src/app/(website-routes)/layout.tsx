"use client";
import Footer from "@/app/shared/footer/footer";
import Navbar from "@/app/shared/navbar/navbar";
import TopBar from "@/app/shared/topbar/topbar";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type PropsTypes = {
  children: ReactNode;
}

const Layout = ({ children }: PropsTypes) => {
  const pathname = usePathname();

  return (
    <div className="overflow-hidden">
      <TopBar />
      {pathname !== "/" && <Navbar />}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
