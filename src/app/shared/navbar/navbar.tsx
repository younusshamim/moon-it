'use client';

import React, { useEffect, useState } from "react";
import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "@/components/primary-button";
import { IoMdMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import navItems from "@/data/nav-items";
import { useTheme } from "next-themes";

const Navbar = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [navbar, setNavbar] = useState(false)

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const changeBackground: any = () => {
    setNavbar(window.scrollY >= window.innerHeight ? true : false)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);

  return (
    <nav
      className={cn('h-[75px] w-full z-50 transition-all duration-150 my-[15px]',
        { 'fixed top-0 backdrop-blur-3xl bg-gray-100/80 dark:bg-background/90 border-b border-gray-300/50 dark:border-border my-[0px]': navbar })}
    >
      <Container className="h-full flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo/logo.png"
            alt="Moon IT Logo"
            width={navbar ? "130" : "150"}
            height="60"
          />
        </Link>

        <div className="flex items-center gap-2">
          {navItems.map((item, index) => (
            <Link
              href={item.link}
              className={cn(
                "px-3 py-2 rounded-md cursor-pointer font-bold hover:bg-foreground-dark dark:hover:bg-gray-800 hover:text-white transition-all duration-300 ease-in-out",
                {
                  "bg-foreground-dark text-white dark:bg-gray-800 ": pathname === item.link,
                }
              )}
              key={item.name + index}
            >
              {item.name}
            </Link>
          ))}

          <div
            className="text-2xl cursor-pointer mx-4"
            title={theme === 'light' ? "Dark Mode" : "Light Mode"}
            onClick={toggleTheme}
          >
            {theme === 'light' ? <IoMdMoon /> : <MdSunny />}
          </div>

          <Link href="/free-seminar">
            <PrimaryButton className="px-4 h-[40px]">ফ্রি সেমিনার</PrimaryButton>
          </Link>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
