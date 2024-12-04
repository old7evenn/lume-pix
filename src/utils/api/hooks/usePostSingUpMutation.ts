import type { UserCredential } from 'firebase/auth';

import { useMutation } from '@tanstack/react-query';

import { registerWithEmailAndPassword } from '@/utils/services/auth';

export interface PostSingUpParams {
  email: string;
  name: string;
  password: string;
}

export const usePostSingUpMutation = (settings?: MutationSettings<PostSingUpParams>) =>
  useMutation<UserCredential, Error, PostSingUpParams>({
    mutationKey: ['postSingUp'],
    mutationFn: params => registerWithEmailAndPassword(params.name, params.email, params.password),
    ...settings?.options,
  });
