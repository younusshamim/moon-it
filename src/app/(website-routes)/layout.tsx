"use client";
import Footer from "@/app/shared/footer/footer";
import Navbar from "@/app/shared/navbar/navbar";
import TopBar from "@/app/shared/topbar/topbar";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { motion } from 'framer-motion'
import { animation4 } from "@/lib/animations/animations";

type PropsTypes = {
  children: ReactNode;
}

const Layout = ({ children }: PropsTypes) => {
  const pathname = usePathname();

  return (
    <motion.div {...animation4} className="overflow-hidden">
      <TopBar />
      {pathname !== "/" && <Navbar />}
      {children}
      <Footer />
    </motion.div>
  );
};

export default Layout;
