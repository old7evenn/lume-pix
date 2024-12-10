'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { cn } from '@/lib/utils';

export const Photo = ({ id, urls, alt_description, user }: Photo) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <Link
      href={`/photos/${id}`}
      className="group relative aspect-square overflow-hidden rounded-md"
    >
      <Image
        fill
        className={cn(
          '-z-10 rounded-[inherit] object-cover duration-500 ease-in-out group-hover:scale-110',
          isLoading ? 'blur-md grayscale' : 'blur-0 grayscale-0'
        )}
        alt={alt_description || ''}
        src={urls.regular}
        onLoadingComplete={() => setLoading(false)}
        unoptimized
      />
      <div className="invisible z-50 flex size-full items-end justify-start rounded-[inherit] bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 duration-300 group-hover:visible group-hover:opacity-100">
        <div className="flex items-center gap-1 p-2 md:gap-4 md:p-4">
          <Image
            alt={alt_description || ''}
            className="rounded-full object-cover"
            height={40}
            src={user.profile_image.large}
            width={40}
          />
          <div className="flex flex-col gap-1 max-w-16 sm:max-w-full">
            <h2 className="line-clamp-1 font-semibold text-sm text-white">{user.name}</h2>
            <p className="text-white text-xs truncate">@{user.username}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
