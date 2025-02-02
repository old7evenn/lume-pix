import type { ComponentPropsWithRef } from 'react';

import { SpinnerIcon } from '@/components/icons';
import { cn } from '@/lib/utils';

type LoadingProps = ComponentPropsWithRef<'svg'> & {
  classsName?: string;
};

export const Loading = ({ classsName, ...props }: LoadingProps) => {
  return (
    <SpinnerIcon {...props} className={cn('animate-spin h-8 w-8 mx-auto', classsName)} />
  );
};
