'use client';

import { animation1 } from "@/lib/animations/animations";
import useMediaQuery from "@/lib/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import NavContainer from "./nav-container";

const Navbar = () => {
  const [fixedNavbar, setFixedNavbar] = useState(false)
  const isLargeScreen = useMediaQuery('(min-width: 640px)')

  const changeBackground: any = () => {
    setFixedNavbar(window.scrollY >= 1 ? true : false)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);

  return fixedNavbar ? (
    <motion.nav
      {...animation1}
      className={cn('py-[15px] w-full z-50 fixed top-0 bg-[#FAFAFA]/80 dark:bg-[#0B1221]/80 backdrop-blur-3xl border-b border-muted ')}
    >
      <NavContainer logoWidth={isLargeScreen ? 130 : 120} />
    </motion.nav>
  ) : (
    <nav className={cn('py-[15px] xl:py-[25px] sticky top-0 mb-6 xl:mb-0 w-full transition-all z-50 ')}>
      <NavContainer logoWidth={isLargeScreen ? 150 : 130} mobileNavClassNames="bg-gradient-to-b from-transparent to-card shadow-md" />
    </nav>
  )
};

export default Navbar;