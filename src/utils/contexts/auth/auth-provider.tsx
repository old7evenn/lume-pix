'use client';

import { createContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '@/utils/services/firebase';

export interface AuthContextValue {
  isLoggedIn: boolean | null;
  loading: boolean;
  userName: string;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, loading] = useAuthState(auth);

  const userName = user?.displayName || '';

  const isLoggedIn = Boolean(user);

  return (
    <AuthContext.Provider value={{ isLoggedIn, loading, userName }}>
      {children}
    </AuthContext.Provider>
  );
};
