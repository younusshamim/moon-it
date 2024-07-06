'use client';

import { useTheme } from 'next-themes';
import NextTopLoader from 'nextjs-toploader';

export default function NextProgress() {
  const { theme, setTheme } = useTheme();

  return (
    <NextTopLoader
      color={theme === 'dark' ? "#00a5e8" : '#f89a4d'}
      showSpinner={false}
      crawlSpeed={100}
      speed={100}
    />
  );
}
