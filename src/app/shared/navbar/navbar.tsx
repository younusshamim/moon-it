'use client';

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import NavContainer from "./nav-container";
import { motion } from 'framer-motion'
import { animation1 } from "@/lib/animations/animations";
import useMediaQuery from "@/lib/hooks/use-media-query";

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
      className={cn('h-[75px] w-full z-50 fixed top-0 backdrop-blur-3xl bg-gray-100/80 dark:bg-background/90 border-b border-gray-300/50 dark:border-border')}
    >
      <NavContainer logoWidth={isLargeScreen ? 130 : 120} />
    </motion.nav>
  ) : (
    <nav className={cn('h-[75px] xl:h-[100px] mb-6 xl:mb-0 w-full transition-all bg-gray-100/80 dark:bg-background/90 xl:bg-transparent z-50')}>
      <NavContainer logoWidth={isLargeScreen ? 150 : 130} />
    </nav>
  )
};

export default Navbar;
