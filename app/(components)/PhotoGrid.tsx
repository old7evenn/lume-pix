import type { GetPhotosResponse } from '@/utils/api/hooks/useGetPhotosQuery';

import { Photo } from './Photo';
import { PhotosSkeleton } from './PhotosSkeleton';

export interface PhotoGridProps {
  columns: number;
  gridColumns: string;
  isFetching: boolean;
  photos: GetPhotosResponse;
  ref?: (node?: Element | null) => void;
}

export const PhotoGrid = ({ columns, gridColumns, ref, isFetching, photos }: PhotoGridProps) => {
  return (
    <>
      <div className={`grid gap-4 w-full grid-cols-2 auto-rows-5px ${gridColumns}`}>
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
      {isFetching && <PhotosSkeleton columns={columns} />}
    </>
  );
};
