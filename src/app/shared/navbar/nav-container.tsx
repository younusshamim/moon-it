'use client';

import Container from "@/components/container";
import PrimaryButton from "@/components/primary-button";
import navItems from "@/data/nav-items";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import MobileMenu from "./mobile-menu";
import MobileMenu from "./mobile-menu";
import ThemeSwitcher from "./theme-switcher";

type PropsType = {
    logoWidth?: number
}

const NavContainer = ({ logoWidth }: PropsType) => {
    const pathname = usePathname();
    return (
        <Container className="h-full flex items-center justify-between">
            <Link href="/">
                <Image
                    src="/logo/logo.png"
                    alt="Moon IT Logo"
                    width={logoWidth}
                    height="60"
                />
            </Link>

            <div className="hidden xl:flex items-center gap-2 ">
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

                <ThemeSwitcher />

                <Link href="/free-seminar">
                    <PrimaryButton className="px-4 h-[40px]">ফ্রি সেমিনার</PrimaryButton>
                </Link>
            </div>

            <MobileMenu />
        </Container>
    );
};

export default NavContainer;