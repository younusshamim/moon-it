'use client';

import SimpleBar from '@/components/simplebar';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { SidebarMenu } from './sidebar-menu';

export default function Sidebar({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        'fixed bottom-0 start-0 z-50 h-full w-[284px] dark:bg-gray-100/50 xl:p-5 2xl:w-[308px]',
        className
      )}
    >
      <div className="h-full bg-black pl-0  pr-1.5 dark:bg-gray-100/70 xl:rounded-2xl ">
        <div className="sticky top-0 z-40 flex justify-center px-6 pb-5 pt-5 2xl:px-8 2xl:pt-6">
          <Link href={'/dashboard'} aria-label="Site Logo">
            <Image
              src="/logo/logo.png"
              alt={'Moon IT'}
              width={120}
              height={10}
              priority
            />
          </Link>
        </div>

        <SimpleBar className="h-[calc(100%-80px)] ">
          <SidebarMenu />
        </SimpleBar>

      </div>
    </aside>
  );
}
