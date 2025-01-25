import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useGetPhotoCollectionQuery } from '@/utils/api/hooks';

export const useCollectionPhoto = () => {
  const params = useSearchParams();
  const tag = params.get('tag') || '';

  const { ref, inView } = useInView({
    rootMargin: '0px 0px 800px 0px',
  });

  const photoCollectionQuery = useGetPhotoCollectionQuery(tag);

  useEffect(() => {
    if (inView && photoCollectionQuery.hasNextPage) {
      photoCollectionQuery.fetchNextPage();
    }
  }, [inView, photoCollectionQuery.fetchNextPage, photoCollectionQuery.hasNextPage]);

  return {
    state: {
      photos: photoCollectionQuery.data,
      isLoading: photoCollectionQuery.isPending,
      ref,
    },
    functions: {},
  };
};
