'use client';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useColumns } from '@/hooks/useColumns';
import { useGetUserPhotosQuery } from '@/utils/api/hooks';

import { PhotoGrid } from './PhotoGrid';
import { PhotosSkeleton } from './PhotosSkeleton';

interface UserPhotosProps {
  username: string;
}

export const UserPhotos = ({ username }: UserPhotosProps) => {
  const { ref, inView } = useInView();
  const { gridColumns, columns } = useColumns();
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

  if (isPending) return <PhotosSkeleton columns={columns} />;

  return (
    <PhotoGrid
      ref={ref}
      isFetching={isFetching}
      columns={columns}
      gridColumns={gridColumns}
      photos={photos!}
    />
  );
};
