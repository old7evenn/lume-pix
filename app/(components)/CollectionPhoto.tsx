'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { SpinnerIcon } from '@/components/icons';
import { useColumns } from '@/hooks/useColumns';
import { useGetPhotoCollectionQuery } from '@/utils/api/hooks';

import { BackButton } from './BackButton';
import { EmptyPhoto } from './EmptyPhoto';
import { PhotoGrid } from './PhotoGrid';

export const CollectionPhoto = ({ tag }: { tag: string }) => {
  const { ref, inView } = useInView();
  const { columns, gridColumns } = useColumns();
  const {
    data: photos,
    isFetching,
    isPending,
    fetchNextPage,
    hasNextPage,
  } = useGetPhotoCollectionQuery(tag);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (isPending) {
    return <SpinnerIcon className="animate-spin h-8 w-8 mx-auto my-20" />;
  }
  if (!photos?.pages.length) {
    return <EmptyPhoto />;
  }

  return (
    <>
      <BackButton />
      <PhotoGrid
        ref={ref}
        isFetching={isFetching}
        columns={columns}
        gridColumns={gridColumns}
        photos={photos}
      />
    </>
  );
};
