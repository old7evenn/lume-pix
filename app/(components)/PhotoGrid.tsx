import type { GetPhotosResponse } from '@/utils/api/hooks/useGetPhotosQuery';

import { Photo } from './Photo';
import { PhotosSkeleton } from './PhotosSkeleton';

export interface PhotoGridProps {
  isFetching: boolean;
  photos: GetPhotosResponse;
  ref?: (node?: Element | null) => void;
}

export const PhotoGrid = ({ ref, isFetching, photos }: PhotoGridProps) => (
  <>
    <div
      className={`grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 w-full auto-rows-10px sm:auto-rows-20px md:auto-rows-auto-20px lg:auto-rows-30px`}
    >
      {photos?.pages.map(page =>
        page.map(photo => (
          <div
            key={photo.id}
            style={{
              gridRowEnd: `span ${Math.ceil((photo.height / photo.width) * 10)}`,
            }}
            className="relative overflow-hidden rounded-md"
          >
            <Photo {...photo} />
          </div>
        ))
      )}
    </div>
    <div ref={ref}></div>
    {isFetching && <PhotosSkeleton />}
  </>
);
