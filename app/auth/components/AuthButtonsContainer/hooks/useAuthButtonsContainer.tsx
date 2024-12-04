import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { logInWithGoogle } from '@/utils/services/auth';

export const useAuthButtonsContainer = () => {
  const router = useRouter();
  const onGoogleClick = async () => {
    try {
      await logInWithGoogle();

      toast.success('Sign in is successful 👍', {
        description: 'We are very glad to see you, have fun',
      });

      router.push('/');
    } catch (e) {
      console.error(e);
      toast.error('Something went wrong, please try again');
    }
  };

  return {
    functions: { onGoogleClick },
  };
};
