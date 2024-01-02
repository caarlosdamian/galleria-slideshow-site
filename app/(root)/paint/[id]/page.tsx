import { getData } from '@/services';
import { PaintI } from '@/types';

const PaintDetails = async ({ params }: { params: { id: string } }) => {
  const paintsInfo: PaintI[] = await getData(`/api/paints/${params.id}`);
  return <div></div>;
};

export default PaintDetails;
