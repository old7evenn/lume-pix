'use client';

import { ClockIcon, DownloadIcon, ExternalLink, EyeIcon, HeartIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Button, Separator } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useGetPhotoIdQuery } from '@/utils/api/hooks/useGetPhotoIdQuery';
import { formatViews, fromNow } from '@/utils/features/format-views';

import { Loading } from '../../../(components)';
import { UserPhotos } from '../../../(components)/UserPhotos';

interface Props {
  id: string;
}

export const PhotoView = ({ id }: Props) => {
  const [isLoading, setLoading] = useState(true);
  const { data, isPending } = useGetPhotoIdQuery(id);

  if (isPending) {
    return <Loading />;
  }

  return (
    <>
      <section className="mx-auto mb-16 max-w-xl space-y-4">
        <div
          className={cn(
            'relative mx-auto aspect-square overflow-hidden rounded-2xl bg-muted/40 transition-all'
          )}
        >
          <Image
            fill
            className={cn(
              'rounded-[inherit] object-cover duration-700 ease-in-out group-hover:scale-110 group-hover:opacity-75',
              isLoading ? 'blur-md grayscale' : 'blur-0 grayscale-0'
            )}
            alt={data?.alt_description || ''}
            draggable={false}
            src={data?.urls.regular!}
            onLoadingComplete={() => setLoading(false)}
            unoptimized
          />
        </div>
        <div className="flex items-center justify-center gap-4">
          <p className="flex items-center gap-1.5 font-medium text-foreground/80 text-xs">
            <EyeIcon className="size-4 text-sky-400" />
            {formatViews(data?.views!)}
          </p>
          <Separator className="h-4" orientation="vertical" />
          <p className="flex items-center gap-1.5 font-medium text-foreground/80 text-xs">
            <HeartIcon className="size-4 text-red-400" />
            {formatViews(data?.likes!)}
          </p>
          <Separator className="h-4" orientation="vertical" />
          <p className="flex items-center gap-1.5 font-medium text-foreground/80 text-xs">
            <DownloadIcon className="size-4 text-green-400" />
            {formatViews(data?.downloads!)}
          </p>
          <Separator className="h-4" orientation="vertical" />
          <p className="flex items-center gap-1.5 font-medium text-foreground/80 text-xs">
            <ClockIcon className="size-4" />
            {fromNow(data?.created_at!)}
          </p>
        </div>
        <Separator orientation="horizontal" />
        <p className="text-sm/6">{data?.description || data?.alt_description}</p>
        {data?.tags.length! > 0 && (
          <div className="flex flex-wrap gap-2">
            {data?.tags.map(tag => (
              <Link
                href={`/collection?tag=${tag.title}`}
                key={tag.title}
                className="px-2 py-1 text-xs bg-secondary rounded-md text-foreground/80"
              >
                #{tag.title}
              </Link>
            ))}
          </div>
        )}
        <Button asChild variant="outline">
          <a href={data?.links.download} rel="noreferrer" target="_blank" download>
            <DownloadIcon />
            Download
          </a>
        </Button>
      </section>
      <div className="mx-auto my-6 flex max-w-xl items-center gap-4">
        <img
          alt={data?.alt_description || ''}
          className="size-20 rounded-full border object-cover"
          src={data?.user.profile_image.large}
        />
        <div className="space-y-1.5">
          <h2 className="font-semibold">{data?.user.name}</h2>
          <p className="flex items-center gap-1.5 text-muted-foreground text-xs">
            @{data?.user.username}
            <a href={data?.user.portfolio_url!} rel="noreferrer" target="_blank">
              <ExternalLink className="size-4 text-sky-400" />
            </a>
          </p>
        </div>
      </div>
      <UserPhotos username={data?.user.username!} />
    </>
  );
};
