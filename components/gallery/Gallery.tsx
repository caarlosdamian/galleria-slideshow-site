import { PaintI } from '@/types';
import { CardImg } from '../cardImg/CardImg';

export const Gallery = ({ paintInfo }: { paintInfo: PaintI[] }) => {
  return (
    <div className="h-full columns-1 gap-6 lg:gap-10 sm:columns-2 lg:columns-4 ">
      {paintInfo.map((item) => (
        <CardImg item={item} key={`${item.name}-thumnbnail`} />
      ))}
    </div>
  );
};
