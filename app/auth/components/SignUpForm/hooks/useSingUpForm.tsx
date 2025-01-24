import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { usePostSingUpMutation } from '@/utils/api/hooks';

import { useStage } from '../../../contexts';
import { signUpSchema } from '../constants';

interface SingUpForm {
  email: string;
  name: string;
  password: string;
  passwordConfirmation: string;
}

export const useSignUpForm = () => {
  const { setStage } = useStage();
  const signUpForm = useForm<SingUpForm>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      name: '',
      password: '',
      passwordConfirmation: '',
    },
  });

  const postSingUpMutation = usePostSingUpMutation({
    options: {
      onSuccess: () =>
        toast.success('Your account has been created 👍', {
          description: 'We are very glad to see you, have fun',
        }),
    },
  });

  const goToSignIn = () => setStage('signIn');

  const onSubmit = signUpForm.handleSubmit(async ({ passwordConfirmation, ...values }) => {
    try {
      await postSingUpMutation.mutateAsync(values);

      toast.success('Sign in is successful 👍', {
        description: 'We are very glad to see you, have fun',
      });
    
      goToSignIn();
    } catch (e) {
      console.error(e);
      signUpForm.setError('email', { message: 'email exists' });
    }
  });

  const isPasswordsEqual =
    signUpForm.watch('password') === signUpForm.watch('passwordConfirmation');

  return {
    state: { loading: postSingUpMutation.isPending, isPasswordsEqual },
    form: signUpForm,
    functions: { onSubmit, goToSignIn },
  };
};
