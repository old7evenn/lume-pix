import { Suspense } from 'react';

import { Loading, ScrollToTop } from '../(components)';
import { CollectionPhoto } from './(components)';

const CollectionPage = () => (
  <Suspense fallback={<Loading />}>
    <ScrollToTop />
    <CollectionPhoto />
  </Suspense>
);

export default CollectionPage;
