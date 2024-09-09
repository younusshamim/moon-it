'use client';

import SearchList from '@/components/search/search-list';
import SearchTrigger from '@/components/search/search-trigger';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Modal from '../modal';

export default function SearchWidget({
  className,
  placeholderClassName,
  icon,
}: {
  className?: string;
  icon?: React.ReactNode;
  placeholderClassName?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        setOpen(!open);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const pathname = usePathname();
  useEffect(() => {
    setOpen(() => false);
    return () => setOpen(() => false);
  }, [pathname]);

  return (
    <>
      <SearchTrigger
        icon={icon}
        className={className}
        onClick={() => setOpen(true)}
        placeholderClassName={placeholderClassName}
      />

      <Modal
        isOpen={open}
        setIsOpen={setOpen}
        className='md:w-[500px] m-0 p-0'
        closeBtn={false}
      >
        <SearchList onClose={() => setOpen(false)} />
      </Modal>
    </>
  );
}
