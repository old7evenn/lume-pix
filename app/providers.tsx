'use client';

import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { IntlProvider } from 'react-intl';
import { toast } from 'sonner';

import type {
  I18nProviderProps,
  ThemeProviderProps} from '@/utils/contexts';

import {
  AuthProvider,
  ThemeProvider
} from '@/utils/contexts';

import { Header } from './(components)';

interface ProvidersProps {
  children: React.ReactNode;
  i18n: Omit<I18nProviderProps, 'children'>;
  theme: Omit<ThemeProviderProps, 'children'>;
}

const DEFAULT_ERROR = 'Something went wrong';
const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
  queryCache: new QueryCache({
    onError: cause => {
      const { response } = cause as ResponseError;
      toast.error(response?.data.message ?? DEFAULT_ERROR, {
        duration: 3000,
      });
    },
  }),
  mutationCache: new MutationCache({
    onError: cause => {
      const { response } = cause as ResponseError;
      toast.error(response?.data.message ?? DEFAULT_ERROR, {
        duration: 3000,
      });
    },
  }),
});

const Providers = ({ children, theme, i18n }: ProvidersProps) => {
  const pathname = usePathname();
  const showHeader = pathname !== '/auth';

  return (
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>
        <IntlProvider {...i18n}>
          <ThemeProvider {...theme}>
            <AuthProvider>
              {showHeader && <Header />}
              {children}
            </AuthProvider>
          </ThemeProvider>
        </IntlProvider>
      </NuqsAdapter>
    </QueryClientProvider>
  );
};

export default Providers;
