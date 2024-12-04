'use client';
import { Button } from '@nextui-org/react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { forwardRef, useState } from 'react';

import type { InputProps } from './input';

import { Input } from './input';

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        ref={ref}
        className="text-foreground relative"
        minLength={8}
        type={showPassword ? 'text' : 'password'}
        onChange={e => e.target.value}
        {...props}
      />
      <Button
        className="absolute right-0 top-0 h-10 px-3 py-2 hover:bg-transparent bg-transparent  focus:outline-none focus:ring-0"
        disabled={!props.value || props.disabled}
        size="sm"
        type="button"
        variant="ghost"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <EyeOffIcon aria-hidden="true" className="h-4 w-4" />
        ) : (
          <EyeIcon aria-hidden="true" className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
});

PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
