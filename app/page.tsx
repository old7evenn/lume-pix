import { Suspense } from 'react';

import { PhotoList, SearchPhoto } from './(components)';

export default function Home() {
  return (
    <Suspense>
      <SearchPhoto />
      <PhotoList />
    </Suspense>
  );
}
