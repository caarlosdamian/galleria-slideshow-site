import { getData } from '@/services';
import { PaintI } from '@/types';

const PaintDetails = async ({ params }: { params: { id: string } }) => {
  const paintsInfo: PaintI[] = await getData(`/api/paints/${params.id}`);
  return <div>
    <div className=""></div>
    <div className=""></div>
    <footer className="bg-red-500 w-full h-8"></footer>
  </div>;
};

export default PaintDetails;
