import { PaintI } from '@/types';

export const useSlider = (array: PaintI[], currentItem: PaintI) => {
  const itemIndex = array.findIndex((item) => item._id === currentItem._id);
  const nextItem =
    array[itemIndex === array.length - 1 ? 0 : itemIndex + 1]?._id;
  const previusItem =
    array[itemIndex === 0 ? array.length - 1 : itemIndex - 1]?._id;

  return {
    nextItem,
    previusItem,
    itemIndex,
  };
};
