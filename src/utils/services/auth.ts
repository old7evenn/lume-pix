import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';

import { logoutUser, postUser } from '../api/requests';
import { auth, provider } from './firebase';

export const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string
) => {
  const user = await createUserWithEmailAndPassword(auth, email, password);

  await updateProfile(user.user, {
    displayName: name,
  });
};

export const logInWithEmailAndPassword = async (email: string, password: string) => {
  const result = await signInWithEmailAndPassword(auth, email, password);
  await postUser({ params: result });

  return result;
};

export const logInWithGoogle = async () => {
  const result = await signInWithPopup(auth, provider);
  await postUser({ params: result });

  return result;
};

export const logout = async () => {
  const result = await signOut(auth);
  await logoutUser({ params: { cookiesName: 'token' } });

  return result;
};
