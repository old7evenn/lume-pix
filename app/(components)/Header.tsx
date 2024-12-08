'use client';

import { User } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { Button } from '@/components/ui';
import { useAuth } from '@/utils/contexts';
import { logout } from '@/utils/services/auth';

import { BackButton } from './BackButton';

export const Header = () => {
  const { isLoggedIn, userName, loading } = useAuth();
  const pathName = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
  };
  return (
    <header className="w-full mb-6">
      {!loading && (
        <div className="flex gap-4 items-center justify-between">
          <Link href={'/'} className="flex gap-4">
            <User />
            <h1 className="text-md font-medium truncate overflow-hidden">
              {isLoggedIn ? userName : ''}
            </h1>
          </Link>
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
      {pathName !== '/' && <BackButton />}
    </header>
  );
};
