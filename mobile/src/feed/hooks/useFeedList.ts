import { FC } from 'react';

// component
import TileView from '@/feed/components/Tile';

export const useFeedList = () => {
  // shitcode
  const array: FC[] = new Array(10).fill(TileView);
  const result: ReadonlyArray<any> = array.map((el, index) => {
    return {
      data: el,
      id: index,
    };
  });
  return result;
};
