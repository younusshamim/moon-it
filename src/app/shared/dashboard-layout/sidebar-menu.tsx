'use client';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useState } from 'react';
import { PiCaretDownBold } from 'react-icons/pi';
import { menuItems } from './menu-items';

export function SidebarMenu() {
  const pathname = usePathname();
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  return (
    <div className="mt-4 pb-3 3xl:mt-6 ">
      {menuItems.map((item, index) => {
        const isActive = pathname === (item?.href as string);
        const pathnameExistInDropdowns: any = item?.dropdownItems?.filter(
          (dropdownItem) => dropdownItem.href === pathname
        );
        const isDropdownOpen = Boolean(pathnameExistInDropdowns?.length);

        if (isDropdownOpen && openItems[item.name] === undefined) {
          setOpenItems(prev => ({ ...prev, [item.name]: true }));
        }
        const toggleOpen = () => {
          setOpenItems(prev => ({ ...prev, [item.name]: !prev[item.name] }));
        };

        return (
          <Fragment key={item.name + '-' + index}>
            {item?.href ? (
              <>
                {item?.dropdownItems ? (
                  <Collapsible
                    open={openItems[item.name]}
                    onOpenChange={(isOpen) => setOpenItems(prev => ({ ...prev, [item.name]: isOpen }))}
                    className="transition-all duration-300 ease-in-out w-full"
                  >
                    <CollapsibleTrigger
                      onClick={toggleOpen}
                      className={cn(
                        'group relative mx-3 flex items-center justify-between w-full cursor-pointer rounded-md pl-3 pr-8 py-2 font-medium lg:my-1 2xl:mx-5 2xl:my-2',
                        isDropdownOpen
                          ? 'before:top-2/5 text-white before:absolute before:-start-3 before:block before:h-4/5 before:w-1 before:rounded-ee-md before:rounded-se-md before:bg-white dark:text-primary dark:before:bg-primary 2xl:before:-start-5'
                          : 'text-gray-300/70 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-700'
                      )}
                    >
                      <span className="flex items-center">
                        {item?.icon && (
                          <span
                            className={cn(
                              'me-2 inline-flex h-5 w-5 items-center justify-center rounded-md [&>svg]:h-[20px] [&>svg]:w-[20px]',
                              isDropdownOpen
                                ? 'text-white dark:text-primary'
                                : 'text-gray-300/70 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-500'
                            )}
                          >
                            {item?.icon}
                          </span>
                        )}
                        {item.name}
                      </span>

                      <PiCaretDownBold
                        strokeWidth={3}
                        className={cn(
                          'h-3.5 w-3.5 -rotate-90 text-gray-500 transition-transform duration-200 rtl:rotate-90',
                          openItems[item.name] && 'rotate-0 rtl:rotate-0'
                        )}
                      />
                    </CollapsibleTrigger>

                    <CollapsibleContent className="transition-all duration-300 ease-in-out">
                      <div className="overflow-hidden transition-[max-height] duration-300 ease-in-out">
                        {item?.dropdownItems?.map((dropdownItem, index) => {
                          const isChildActive =
                            pathname === (dropdownItem?.href as string);

                          return (
                            <Link
                              href={dropdownItem?.href}
                              key={dropdownItem?.name + index}
                              className={cn(
                                'group mx-3.5 mb-0.5 flex items-center justify-between rounded-md px-2.5 py-2 font-medium capitalize last-of-type:mb-1 lg:last-of-type:mb-2 2xl:mx-5 2xl:px-3.5',
                                isChildActive
                                  ? 'text-gray-200 dark:text-gray-700'
                                  : 'text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-500'
                              )}
                            >
                              <div className="flex items-center truncate">
                                <span
                                  className={cn(
                                    'me-[18px] ms-1 inline-flex h-1 w-1 rounded-full bg-current transition-all duration-200',
                                    isChildActive
                                      ? 'bg-primary ring-[1px] ring-primary'
                                      : 'opacity-40 group-hover:bg-gray-700'
                                  )}
                                />{' '}
                                <span className="truncate">
                                  {dropdownItem?.name}
                                </span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <Link
                    href={item?.href}
                    className={cn(
                      'group relative mx-3 my-0.5 flex items-center justify-between rounded-md px-3 py-2 font-medium capitalize lg:my-1 2xl:mx-5 2xl:my-2',
                      isActive
                        ? 'before:top-2/5 text-white before:absolute before:-start-3 before:block before:h-4/5 before:w-1 before:rounded-ee-md before:rounded-se-md before:bg-white dark:text-gray-900 2xl:before:-start-5'
                        : 'text-gray-300/70 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-700'
                    )}
                  >

                    <div className="flex items-center truncate">
                      {item?.icon && (
                        <span
                          className={cn(
                            'me-2 inline-flex h-5 w-5 items-center justify-center rounded-md transition-colors duration-200 [&>svg]:h-[20px] [&>svg]:w-[20px]',
                            isActive
                              ? 'text-white dark:text-gray-900'
                              : 'text-gray-300/70 group-hover:text-gray-500 dark:text-gray-500 '
                          )}
                        >
                          {item?.icon}
                        </span>
                      )}
                      <span className="truncate">{item.name}</span>
                    </div>
                  </Link>
                )}
              </>
            ) : (
              <h6
                className={cn(
                  'mb-2 truncate px-6 text-xs font-normal uppercase tracking-widest text-gray-500 dark:text-gray-500 2xl:px-8',
                  index !== 0 && 'mt-6 3xl:mt-7'
                )}
              >
                {item.name}
              </h6>
            )}
          </Fragment>
        );
      })}
    </div >
  );
}