'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProfileMenu({
  buttonClassName,
  avatarClassName,
  username = false,
}: {
  buttonClassName?: string;
  avatarClassName?: string;
  username?: boolean;
}) {
  return (
    <ProfileMenuPopover>
      <PopoverTrigger asChild>
        <button
          className={cn(
            'w-9 shrink-0 rounded-full outline-none focus-visible:ring-[1.5px] focus-visible:ring-gray-400 focus-visible:ring-offset-2 active:translate-y-px sm:w-10',
            buttonClassName
          )}
        >
          <Avatar className={cn('!h-9 w-9 sm:!h-10 sm:!w-10', avatarClassName)}>
            <AvatarImage src="https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-11.webp" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          {!!username && (
            <span className="username hidden text-gray-200 dark:text-gray-700 md:inline-flex">
              Hi, Andry
            </span>
          )}
        </button>
      </PopoverTrigger >

      <PopoverContent className="z-[9999] p-0 dark:bg-gray-100 [&>svg]:dark:fill-gray-100">
        <DropdownMenu />
      </PopoverContent >
    </ProfileMenuPopover>
  );
}

function ProfileMenuPopover({ children }: React.PropsWithChildren<{}>) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Popover    >
      {children}
    </Popover>
  );
}

const menuItems = [
  {
    name: 'My Profile',
    href: '',
  },
  {
    name: 'Account Settings',
    href: '',
  },
  {
    name: 'Activity Log',
    href: '#',
  },
];

function DropdownMenu() {
  return (
    <div className="w-64 text-left rtl:text-right">
      <div className="flex items-center border-b border-gray-300 px-6 pb-5 pt-6">
        <Avatar>
          <AvatarImage src="https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-11.webp" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="ms-3">
          <p className="font-semibold">
            Albert Flores
          </p>
          <p className="text-gray-600">flores@doe.io</p>
        </div>
      </div>
      <div className="grid px-3.5 py-3.5 font-medium text-gray-700">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="group my-0.5 flex items-center rounded-md px-2.5 py-2 hover:bg-gray-100 focus:outline-none hover:dark:bg-gray-50/50"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="border-t border-gray-300 px-6 pb-6 pt-5">
        <Button
          className="h-auto w-full justify-start p-0 font-medium text-gray-700 outline-none focus-within:text-gray-600 hover:text-gray-900 focus-visible:ring-0"
          variant="ghost"
          onClick={() => signOut()}
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
}
