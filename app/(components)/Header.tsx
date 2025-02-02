'use client';

import { GithubIcon, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { Button } from '@/components/ui';
import { useAuth } from '@/utils/contexts';
import { logout } from '@/utils/services/auth';

import { BackButton } from './BackButton';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  const { isLoggedIn, userName, loading } = useAuth();
  const pathName = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.replace('/auth');
  };

  return (
    <header className="container my-6">
      {!loading && (
        <div className="flex gap-4 items-center justify-between">
          <Link href={'/'} className="flex gap-4">
            <User />
            <h1 className="text-md font-medium truncate overflow-hidden">
              {isLoggedIn ? userName : ''}
            </h1>
          </Link>
          <div className="flex items-center gap-4">
            <Button asChild size={'icon'} variant={'ghost'}>
              <Link
                href="https://github.com/old7evenn"
                className="text-muted-foreground hover:text-primary px-2"
                target="_blanck"
              >
                <GithubIcon />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            {isLoggedIn ? (
              <Button variant="outline" onClick={handleLogout}>
                sign-out
              </Button>
            ) : (
              <Button variant="outline" onClick={() => router.push('/auth')}>
                sign-in
              </Button>
            )}
            {/* <Select defaultValue={'en'}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">en</SelectItem>
                <SelectItem value="uk">uk</SelectItem>
              </SelectContent>
            </Select> */}
            <ThemeToggle />
          </div>
        </div>
      )}
      {pathName !== '/' && <BackButton />}
    </header>
  );
};
