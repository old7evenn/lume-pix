'use client';

import { SpinnerIcon } from '@/components/icons';

import { EmptyPhoto } from '../EmptyPhoto';
import { PhotoGrid } from '../PhotoGrid';
import { usePhotoList } from './hooks/usePhotoList';

export const PhotoList = () => {
  const { state } = usePhotoList();

  if (state.isLoading) {
    return <SpinnerIcon className="animate-spin h-8 w-8 mx-auto my-20" />;
  }
  if (!state.photos?.pages[0].length) {
    return <EmptyPhoto />;
  }

  return <PhotoGrid ref={state.ref} isFetching={state.isLoading} photos={state.photos} />;
};
