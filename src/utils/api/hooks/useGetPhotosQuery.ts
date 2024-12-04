import type { UseInfiniteQueryResult } from '@tanstack/react-query';

import { useInfiniteQuery } from '@tanstack/react-query';

import { getPhotos } from '../requests';

export interface GetPhotosResponse {
  pageParams: number[];
  pages: Photo[][];
}

export const useGetPhotosQuery = (
  query: string,
  settings?: InfiniteQuerySettings<typeof getPhotos>
): UseInfiniteQueryResult<GetPhotosResponse> =>
  useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['photos', query],
    queryFn: ({ pageParam }) =>
      getPhotos({ params: { page: pageParam, query }, config: settings?.config }),
    getNextPageParam: (_, allPages) => allPages.length + 1,
    getPreviousPageParam: firstPage => firstPage.previous_page,
    ...settings?.options,
  });
