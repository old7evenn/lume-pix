'use client';

import { User } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui';
import { useAuth } from '@/utils/contexts';
import { logout } from '@/utils/services/auth';

export const Header = () => {
  const { isLoggedIn, userName, loading } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
  };
  return (
    <header className="w-full mb-6">
      {!loading && (
        <div className="flex gap-4 items-center justify-between">
          <div className="flex gap-4">
            <User />
            <h1 className="text-md font-medium truncate overflow-hidden">
              {isLoggedIn ? userName : ''}
            </h1>
          </div>
          {isLoggedIn ? (
            <Button variant="outline" onClick={handleLogout}>
              sign-out
            </Button>
          ) : (
            <Button variant="outline" onClick={() => router.push('/auth')}>
              sign-in
            </Button>
          )}
        </div>
      )}
    </header>
  );
};
