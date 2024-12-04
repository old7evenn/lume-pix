import { API_KEY } from '@/utils/api/constants';
import { api } from '@/utils/api/instance';

export interface GetPhotosCollection {
  page: number;
  tag: string;
}

export const getPhotoCollection = async ({
  config,
  params,
}: RequestConfig<GetPhotosCollection>) => {
  const { results } = await api.get<PhotoSearch>(
    `search/photos?page=${params.page}&per_page=15&query=${params.tag}&client_id=${API_KEY}`,
    config
  );
  return results;
};
