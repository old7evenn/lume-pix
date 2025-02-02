'use client';

import { EmptyPhoto } from '../EmptyPhoto';
import { Loading } from '../Loading';
import { PhotoGrid } from '../PhotoGrid';
import { usePhotoList } from './hooks/usePhotoList';

export const PhotoList = () => {
  const { state } = usePhotoList();

  if (state.isLoading) {
    return <Loading />;
  }
  if (!state.photos?.pages[0].length) {
    return <EmptyPhoto />;
  }

  return <PhotoGrid ref={state.ref} isFetching={state.isLoading} photos={state.photos} />;
};
