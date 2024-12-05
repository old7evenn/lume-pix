'use client';

import { useRouter } from 'next/navigation';

import { BackButton } from './(components)';

export default function NotFoundPage() {
  const router = useRouter();
  return (
    <div className="my-32 space-y-4 text-center">
      <h1 className="text-center font-black text-2xl">Page Not Found!</h1>
      <BackButton />
    </div>
  );
}
