'use client';

import type { AxiosError } from 'axios';

import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import { toast } from 'sonner';

import { AuthProvider } from '@/utils/contexts';

import { Header } from './(components)/Header';

interface ProvidersProps {
  children: React.ReactNode;
}

const DEFAULT_ERROR = 'Something went wrong';
const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
  queryCache: new QueryCache({
    onError: cause => {
      const { response } = cause as AxiosError<BaseResponse>;
      toast.error(response?.data.message ?? DEFAULT_ERROR, {
        duration: 3000,
      });
    },
  }),
  mutationCache: new MutationCache({
    onError: cause => {
      const { response } = cause as AxiosError<BaseResponse>;
      toast.error(response?.data.message ?? DEFAULT_ERROR, {
        duration: 3000,
      });
    },
  }),
});

const Providers = ({ children }: ProvidersProps) => {
  const pathname = usePathname();
  const showHeader = pathname !== '/auth';

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {showHeader && <Header />}
        {children}
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default Providers;
