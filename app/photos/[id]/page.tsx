import { ScrollToTop } from '../../(components)';
import { PhotoView } from './(components)';

interface Props {
  params: { id: string };
}

const PhotoIdPage = ({ params }: Props) => (
  <>
    <ScrollToTop />
    <PhotoView id={params.id} />
  </>
);

export default PhotoIdPage;
