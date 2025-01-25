import { useQueryState } from 'nuqs';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useGetPhotosQuery } from '@/utils/api/hooks';

export const usePhotoList = () => {
  const [query, _] = useQueryState('query');
  const { ref, inView } = useInView({
    rootMargin: '0px 0px 800px 0px',
  });

  const photosQuery = useGetPhotosQuery(query!);

  useEffect(() => {
    if (inView && photosQuery.hasNextPage) {
      photosQuery.fetchNextPage();
    }
  }, [inView, photosQuery.fetchNextPage, photosQuery.hasNextPage]);
  return {
    state: {
      photos: photosQuery.data,
      isLoading: photosQuery.isPending,
      ref,
    },
  };
};
