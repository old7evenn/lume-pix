import { API_KEY } from '../../constants';
import { api } from '../../instance';

export interface GetUserPhotosParams {
  page: number;
  userName: string;
}

export const getUserPhotos = async ({ config, params }: RequestConfig<GetUserPhotosParams>) =>
  api.get<PhotoSearch>(
    `users/${params.userName}/photos?page=${params.page}&per_page=15&client_id=${API_KEY}`,
    config
  );
