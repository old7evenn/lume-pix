import { ScrollToTop } from '../(components)';
import { CollectionPhoto } from '../(components)';

interface Props {
  searchParams: Promise<{
    tag?: string;
  }>;
}

export default async function Page(props: Props) {
  const query = await props.searchParams;

  return (
    <>
      <ScrollToTop />
      <CollectionPhoto tag={query.tag!} />
    </>
  );
}
