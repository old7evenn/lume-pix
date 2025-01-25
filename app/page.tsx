import { Suspense } from 'react';

import { PhotoList, Search } from './(components)';

export default async function Home() {
  return (
    <Suspense>
      <Search />
      <PhotoList />
    </Suspense>
  );
}
