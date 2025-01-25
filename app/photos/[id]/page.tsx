import { ScrollToTop } from '../../(components)';
import { PhotoView } from './(components)';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: Props) {
  const photo = await params;
  return (
    <>
      <ScrollToTop />
      <PhotoView id={photo.id} />
    </>
  );
}
