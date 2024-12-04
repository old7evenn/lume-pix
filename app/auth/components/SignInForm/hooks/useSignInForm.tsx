import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { usePostSignInMutation } from '@/utils/api/hooks';

import { useStage } from '../../../contexts';
import { signInSchema } from '../constants';

interface SingInForm {
  email: string;
  password: string;
}

export const useSignInForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const { setStage } = useStage();

  const signInForm = useForm<SingInForm>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: '', password: '' },
  });
  const postSignInMutation = usePostSignInMutation();

  const onSubmit = signInForm.handleSubmit(async values => {
    try {
      await postSignInMutation.mutateAsync(values);

      toast.success('Sign in is successful 👍', {
        description: 'We are very glad to see you, have fun',
      });

      router.push('/');
    } catch (e) {
      console.error(e);
      setError('invalid credentials login');
    }
  });

  const goToSignUp = () => setStage('signUp');

  return {
    state: { loading: postSignInMutation.isPending },
    form: signInForm,
    functions: { onSubmit, goToSignUp },
    error,
  };
};
