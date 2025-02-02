import { ScrollToTop } from '../../(components)';
import { PhotoView } from './(components)';

interface Props {
  params: Promise<{ id: string }>;
}

const PhotoIdPage = async ({ params }: Props) => {
  const { id } = await params;

  return (
    <>
      <ScrollToTop />
      <PhotoView id={id} />
    </>
  );
};

export default PhotoIdPage;
