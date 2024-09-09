'use client';

import { pageLinks } from '@/components/search/page-links.data';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
  PiFileTextDuotone,
  PiMagnifyingGlassBold,
  PiXBold
} from 'react-icons/pi';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function SearchList({ onClose }: { onClose?: () => void }) {
  const inputRef = useRef(null);
  const [searchText, setSearchText] = useState('');

  let menuItemsFiltered = pageLinks;
  if (searchText.length > 0) {
    menuItemsFiltered = pageLinks.filter((item: any) => {
      const label = item.name;
      return (
        label.match(searchText.toLowerCase()) ||
        (label.toLowerCase().match(searchText.toLowerCase()) && label)
      );
    });
  }

  useEffect(() => {
    if (inputRef?.current) {
      // @ts-ignore
      inputRef.current.focus();
    }
    return () => {
      inputRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex items-center px-5 pt-4">
        <Input
          value={searchText}
          ref={inputRef}
          onChange={(e) => setSearchText(() => e.target.value)}
          placeholder="Search pages here"
          className="flex-1"
          inputClassName="bg-gray-200 focus:bg-white"
          prefix={
            <PiMagnifyingGlassBold className="h-[18px] w-[18px] text-gray-600" />
          }
          suffix={
            searchText && (
              <Button
                size="sm"
                variant="ghost"
                className="h-auto w-auto px-0"
                onClick={(e) => {
                  e.preventDefault();
                  setSearchText(() => '');
                }}
              >
                Clear
              </Button>
            )
          }
        />
        <span
          // variant="text"
          // size="sm"
          className="ms-3 text-gray-500 hover:text-gray-700 cursor-pointer"
          onClick={onClose}
        >
          <PiXBold className="h-5 w-5" />
        </span>
      </div>

      <div className="custom-scrollbar min-h-[60vh] max-h-[60vh] overflow-y-auto border-t border-gray-300 px-2 py-4">

        {menuItemsFiltered.length === 0 && (
          <div className='w-full h-full flex justify-center items-center'>
            <p>No Result Found</p>
          </div>
        )}

        {menuItemsFiltered.map((item, index) => {
          return (
            <div key={item.name + '-' + index}>
              {item?.href ? (
                <Link
                  href={item?.href as string}
                  className="relative my-0.5 flex items-center rounded-lg px-3 py-2 text-sm hover:bg-gray-100 focus:outline-none focus-visible:bg-gray-100 dark:hover:bg-gray-50/50 dark:hover:backdrop-blur-lg"
                >
                  <span className="inline-flex items-center justify-center rounded-md border border-gray-300 p-2 text-gray-500">
                    <PiFileTextDuotone className="h-5 w-5" />
                  </span>

                  <span className="ms-3 grid gap-0.5">
                    <span className="font-medium capitalize text-gray-900 dark:text-gray-700">
                      {item.name}
                    </span>
                    <span className="text-gray-500">
                      {item?.href as string}
                    </span>
                  </span>
                </Link>
              ) : (
                <h4
                  className={cn(
                    'mb-1 px-3 text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-500',
                    index !== 0 && 'mt-6 4xl:mt-7'
                  )}
                >
                  {item.name}
                </h4>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
