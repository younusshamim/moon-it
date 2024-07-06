'use client';

import NextTopLoader from 'nextjs-toploader';

export default function NextProgress() {
  return <NextTopLoader color="#14b9fc" showSpinner={false} crawlSpeed={100} speed={100} />;
}
