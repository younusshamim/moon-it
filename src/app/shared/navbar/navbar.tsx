'use client';

import { useSmScreen } from "@/hooks/use-media-query";
import { animation1 } from "@/lib/animations/animations";
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import NavContainer from "./nav-container";

const Navbar = () => {
  const [fixedNavbar, setFixedNavbar] = useState(false)
  const isSmScreen = useSmScreen()

  const changeBackground: any = () => {
    setFixedNavbar(window.scrollY >= 1 ? true : false)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);


  return fixedNavbar ? (
    <div>
      <div className="h-full w-full absolute blur-md"></div>
      <motion.nav
        {...animation1}
        className={cn('py-[15px] w-full z-50 fixed top-0 backdrop-blur-2xl-new border-b border-muted bg-slate-50/60 dark:bg-[#0B1120]/80 transition-colors duration-500')}
      >
        <NavContainer logoWidth={isSmScreen ? 130 : 120} />
      </motion.nav>
    </div>
  ) : (
    <nav className={cn('py-[15px] lg:py-[25px] sticky top-0 mb-6 lg:mb-0 w-full transition-all z-50 ')}>
      <NavContainer logoWidth={isSmScreen ? 150 : 130} mobileNavClassNames="bg-gradient-to-b from-transparent to-card shadow-md" />
    </nav>
  )
};

export default Navbar;