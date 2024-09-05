'use client';

import Image from 'next/image';
import Link from 'next/link';

function HeaderMenuRight() {
  return (
    <div className="ms-auto grid shrink-0 grid-cols-4 items-center gap-2 text-gray-700 xs:gap-3 xl:gap-4">
      {/* <ProfileMenu /> */}
    </div>
  );
}

export default function Header() {
  return (
    <header
      className={
        'sticky top-0 z-[990] flex items-center bg-gray-0/80 px-4 py-4 backdrop-blur-xl md:px-5 lg:px-6 xl:-ms-1.5 xl:pl-4 2xl:-ms-0 2xl:py-5 2xl:pl-6 3xl:px-8 3xl:pl-6 4xl:px-10 4xl:pl-9 dark:bg-gray-50/50'
      }
    >
      <div className="flex w-full max-w-2xl items-center">
        {/* <HamburgerButton
          view={
            <Sidebar className="static w-full xl:p-0 2xl:w-full [&>div]:xl:rounded-none" />
          }
        /> */}
        <Link
          href={'/'}
          aria-label="Site Logo"
          className="me-4 w-9 shrink-0 text-gray-800 hover:text-gray-900 lg:me-5 xl:hidden"
        >
          <Image
            src="/logo/logo-icon.png"
            alt={'Moon IT'}
            width={20}
            height={20}
            priority
          />
        </Link>

        {/* <SearchWidget /> */}
      </div>

      <HeaderMenuRight />
    </header>
  );
}
