import type { UserCredential } from 'firebase/auth';

import { serverApi } from '../../instance';

export type PostUserRequestConfig = RequestConfig<UserCredential>;

export const postUser = ({ params, config }: PostUserRequestConfig) =>
  serverApi.post(`auth`, params, config);
