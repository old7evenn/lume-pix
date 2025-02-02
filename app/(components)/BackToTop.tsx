'use client';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui';

export const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Button
      className={`fixed bottom-[70px] left-5 size-12 rounded-full transition-all z-20 ${
        showButton ? 'opacity-100' : 'opacity-0'
      }`}
      size={'icon'}
      variant={'secondary'}
      onClick={handleClick}
    >
      <ArrowUp />
    </Button>
  );
};
