import type { UseInfiniteQueryResult } from '@tanstack/react-query';

import { useInfiniteQuery } from '@tanstack/react-query';

import { getUserPhotos } from '../requests';

interface GetPhotosResponse {
  pageParams: number[];
  pages: Photo[][];
}

export const useGetUserPhotosQuery = (
  userName: string,
  settings?: InfiniteQuerySettings<typeof getUserPhotos>
): UseInfiniteQueryResult<GetPhotosResponse> =>
  useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['user-photos', userName],
    queryFn: ({ pageParam }) =>
      getUserPhotos({ params: { page: pageParam, userName }, config: settings?.config }),
    getNextPageParam: (_, allPages) => allPages.length + 1,
    getPreviousPageParam: firstPage => firstPage.previous_page,
    ...settings?.options,
  });
