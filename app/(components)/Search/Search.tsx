'use client';

import { SearchIcon } from 'lucide-react';
import { useQueryState } from 'nuqs';

import { Input } from '@/components/ui';

import { useDebounceCallback } from './hooks/useDebounce';

export const Search = () => {
  const [query, setQuery] = useQueryState('query', { defaultValue: '' });
  const debounced = useDebounceCallback((value: string) => {
    setQuery(value);
  }, 1000);

  return (
    <div className="relative w-full flex max-w-lg items-center justify-center gap-2 mb-4">
      <SearchIcon className="-translate-y-1/2 absolute top-1/2 left-4 size-4 text-muted-foreground" />
      <Input
        className="rounded-full px-4 py-2 pl-10"
        defaultValue={query}
        type="text"
        onChange={e => debounced(e.target.value)}
        placeholder="Search any photos"
      />
    </div>
  );
};
