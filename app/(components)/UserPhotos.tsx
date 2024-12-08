'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useGetUserPhotosQuery } from '@/utils/api/hooks';

import { PhotoGrid } from './PhotoGrid';
import { PhotosSkeleton } from './PhotosSkeleton';

interface UserPhotosProps {
  username: string;
}

export const UserPhotos = ({ username }: UserPhotosProps) => {
  const { ref, inView } = useInView({
    rootMargin: '0px 0px 800px 0px',
  });
  const {
    data: photos,
    isFetching,
    isPending,
    fetchNextPage,
    hasNextPage,
  } = useGetUserPhotosQuery(username);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (isPending) {
    return <PhotosSkeleton />;
  }

  return <PhotoGrid ref={ref} isFetching={isFetching} photos={photos!} />;
};
