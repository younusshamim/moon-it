'use client';

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import NavContainer from "./nav-container";
import { motion } from 'framer-motion'
import { animation1 } from "@/lib/animations/animations";

const Navbar = () => {
  const [fixedNavbar, setFixedNavbar] = useState(false)

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
      className={cn('h-[75px] w-full z-50 fixed top-0 backdrop-blur-3xl bg-gray-100/80 dark:bg-background/90 border-b border-gray-300/50 dark:border-border hidden xl:block')}
    >
      <NavContainer logoWidth={130} />
    </motion.nav>
  ) : (
    <nav className={cn('h-[100px] w-full transition-all hidden xl:block')}>
      <NavContainer />
    </nav>
  )
};

export default Navbar;
