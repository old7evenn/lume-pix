import { Suspense } from 'react';

import { PhotoList, Search } from './(components)';

const Home = async () => (
  <Suspense>
    <Search />
    <PhotoList />
  </Suspense>
);

export default Home;
