import { ScrollToTop } from '../(components)';
import { CollectionPhoto } from '../(components)/CollectionPhoto';

interface Props {
  searchParams: {
    tag?: string;
  };
}

export default async function Page({ searchParams }: Props) {
  const query = await searchParams;

  return (
    <>
      <ScrollToTop />
      <CollectionPhoto tag={query.tag!} />
    </>
  );
}
