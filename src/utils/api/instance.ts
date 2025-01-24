import { HttpClient } from './http-client';

export const api = new HttpClient({
  baseURL: 'https://api.unsplash.com',
});

export const serverApi = new HttpClient({
  baseURL: 'api',
})