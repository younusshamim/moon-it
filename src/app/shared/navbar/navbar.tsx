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

  const toggleTheme = () => {
    switch (theme) {
      case 'light': setTheme("dark")
        break;
      case 'dark': setTheme("light")
        break;
      default: setTheme("light")
        break;
    }
  }

  return (
    <nav>
      <Container className="h-[100px] flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo/logo.png"
            alt="Moon IT Logo"
            width="150"
            height="60"
          />
        </Link>

        <div className="flex items-center gap-2">
          {navItems.map((item, index) => (
            <Link
              href={item.link}
              className={cn(
                "px-3 py-2 rounded-md cursor-pointer font-bold hover:bg-foreground-dark hover:text-background transition-all duration-300 ease-in-out",
                {
                  "bg-foreground-dark text-background": pathname === item.link,
                }
              )}
              key={item.name + index}
            >
              {item.name}
            </Link>
          ))}

          <div
            className="text-2xl cursor-pointer mx-4"
            title={theme === 'light' ? "Dark Mode" : "Light Mood"}
            onClick={toggleTheme}
          >
            {theme === 'light' ? <IoMdMoon /> : <MdSunny />}
          </div>

          <Link href="/free-seminar">
            <PrimaryButton>ফ্রি সেমিনার</PrimaryButton>
          </Link>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;