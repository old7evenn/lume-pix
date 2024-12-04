import { useQuery } from '@tanstack/react-query';

import { getPhotoId } from '../requests';

export const useGetPhotoIdQuery = (id: string, settings?: QuerySettings<typeof getPhotoId>) =>
  useQuery<PhotoDetails>({
    queryKey: ['photo', id],
    queryFn: () => getPhotoId({ params: { id }, config: settings?.config }),
    ...settings?.options,
  });
