import type { UserCredential } from 'firebase/auth';

import { useMutation } from '@tanstack/react-query';

import { logInWithEmailAndPassword } from '@/utils/services/auth';

export interface PostSignInParams {
  email: string;
  password: string;
}

export const usePostSignInMutation = (settings?: MutationSettings<PostSignInParams>) =>
  useMutation<UserCredential, Error, PostSignInParams>({
    mutationKey: ['postSignIn'],
    mutationFn: params => logInWithEmailAndPassword(params.email, params.password),
    ...settings?.options,
  });
