'use client';

import { SpinnerIcon } from '@/components/icons';

import { EmptyPhoto, PhotoGrid } from '../../../(components)';
import { useCollectionPhoto } from './hooks/useCollectionPhoto';

export const CollectionPhoto = () => {
  const { state } = useCollectionPhoto();

  if (state.isLoading) {
    return <SpinnerIcon className="animate-spin h-8 w-8 mx-auto my-20" />;
  }

  if (!state.photos?.pages[0].length) {
    return <EmptyPhoto />;
  }

  return <PhotoGrid ref={state.ref} isFetching={state.isLoading} photos={state.photos} />;
};
