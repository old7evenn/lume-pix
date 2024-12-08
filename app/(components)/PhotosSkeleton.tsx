import { Skeleton } from '@/components/ui';

export const PhotosSkeleton = () => {
  return (
    <div className={`mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4`}>
      {[...Array.from({ length: 8 })].map((_, i) => (
        <Skeleton key={i} className="aspect-square rounded-xl bg-secondary" />
      ))}
    </div>
  );
};
