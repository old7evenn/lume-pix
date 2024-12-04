import { PhotoView, ScrollToTop } from '../../(components)';

interface Props {
  params: { id: string };
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
