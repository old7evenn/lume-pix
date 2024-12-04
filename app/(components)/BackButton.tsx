'use client';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui';

export const BackButton = () => {
  const router = useRouter();

  return (
    <Button className="mb-4 mr-auto" variant={'ghost'} onClick={() => router.back()}>
      <ArrowLeft /> Back
    </Button>
  );
};
