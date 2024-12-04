import { UNSPLASH_KEY } from '@/utils/api/constants';
import { api } from '@/utils/api/instance';

export interface GetPhotosId {
  id: string;
}

export const getPhotoId = async ({ config, params }: RequestConfig<GetPhotosId>) =>
  api.get<PhotoDetails>(`photos/${params.id}?client_id=${UNSPLASH_KEY}`, config);
