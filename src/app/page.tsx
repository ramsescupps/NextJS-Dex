"use client";

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const SpotPage: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname == '/') {
      router.push("/spot");
    }
  }, []);

  return (
    <>
    </>
  )
}

export default SpotPage;
