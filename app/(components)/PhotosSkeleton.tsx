import { Skeleton } from '@/components/ui';

export const PhotosSkeleton = ({ columns }: { columns: number }) => {
  const gridColumns = columns === 3 ? 'grid-cols-3' : 'grid-cols-5';

  return (
    <div className={`mt-4 grid ${gridColumns} gap-4`}>
      {[...Array.from({ length: columns })].map((_, i) => (
        <Skeleton key={i} className="aspect-square rounded-xl bg-secondary" />
      ))}
    </div>
  );
};
