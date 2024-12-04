import type { UseInfiniteQueryResult } from '@tanstack/react-query';

import { useInfiniteQuery } from '@tanstack/react-query';

import type { GetPhotosResponse } from './useGetPhotosQuery';

import { getPhotoCollection } from '../requests';

export const useGetPhotoCollectionQuery = (
  tag: string,
  settings?: InfiniteQuerySettings<typeof getPhotoCollection>
): UseInfiniteQueryResult<GetPhotosResponse> =>
  useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['collection-photo', tag],
    queryFn: ({ pageParam }) =>
      getPhotoCollection({ params: { page: pageParam, tag }, config: settings?.config }),
    getNextPageParam: (_, allPages) => allPages.length + 1,
    getPreviousPageParam: firstPage => firstPage.previous_page,
    ...settings?.options,
  });
