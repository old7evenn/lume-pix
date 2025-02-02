import { GoogleIcon } from '@/components/icons';
import { Button } from '@/components/ui';

import { Loading } from '../../../(components)';
import { useAuthButtonsContainer } from './hooks/useAuthButtonsContainer';

interface AuthButtonsContainerProps {
  loading: boolean;
}

export const AuthButtonsContainer: React.FC<AuthButtonsContainerProps> = ({ loading }) => {
  const { functions } = useAuthButtonsContainer();

  return (
    <div className="flex flex-col gap-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Button
          disabled={loading}
          type="button"
          variant="outline"
          onClick={functions.onGoogleClick}
        >
          {loading ? <Loading /> : <GoogleIcon className="mr-2 h-4 w-4" />}
          Google
        </Button>
      </div>
    </div>
  );
};
