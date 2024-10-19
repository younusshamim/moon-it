import { cn } from '@/lib/utils';

export type PageHeaderTypes = {
  title: string;
  className?: string;
};

export default function PageHeader({
  title,
  children,
  className,
}: React.PropsWithChildren<PageHeaderTypes>) {
  return (
    <header className={cn('mb-6 @container xs:-mt-2 lg:mb-7', className)}>
      <div className="flex flex-col @lg:flex-row @lg:items-center @lg:justify-between">
        <div>
          <h2
            className="mb-2 text-[22px] lg:text-2xl 4xl:text-[26px] font-bold"
          >
            {title}
          </h2>

          <p>Back to page</p>
        </div>
        {children}
      </div>
    </header>
  );
}
