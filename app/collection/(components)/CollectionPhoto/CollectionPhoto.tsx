'use client';

import { EmptyPhoto, Loading, PhotoGrid  } from '../../../(components)';
import { useCollectionPhoto } from './hooks/useCollectionPhoto';

export const CollectionPhoto = () => {
  const { state } = useCollectionPhoto();

  if (state.isLoading) {
    return <Loading />;
  }

  if (!state.photos?.pages[0].length) {
    return <EmptyPhoto />;
  }

  return <PhotoGrid ref={state.ref} isFetching={state.isLoading} photos={state.photos} />;
};
