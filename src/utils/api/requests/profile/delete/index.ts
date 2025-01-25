import { serverApi } from '@/utils/api/instance';

interface LogoutUser {
  cookiesName: string;
}

export type LogoutUserRequestConfig = RequestConfig<LogoutUser>;

export const logoutUser = ({ params, config }: LogoutUserRequestConfig) =>
  serverApi.delete(`auth?cookies_name=${params.cookiesName}`, config);
