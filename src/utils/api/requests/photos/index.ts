import { API_KEY } from '../../constants';
import { api } from '../../instance';

export interface GetPhotosParams {
  page: number;
  query: string;
}

export const getPhotos = async ({ config, params }: RequestConfig<GetPhotosParams>) => {
  if (!params?.query) {
    return api.get<Photo[]>(`photos?page=${params?.page}&per_page=15&client_id=${API_KEY}`, config);
  }
  const { results } = await api.get<PhotoSearch>(
    `search/photos?page=${params.page}&per_page=15&query=${params.query}&client_id=${API_KEY}`,
    config
  );
  return results;
};
