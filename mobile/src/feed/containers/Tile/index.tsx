import React, { FC, memo } from 'react';

// component
import TileView from 'feed/components/Tile';
import { IPostItem } from '@/feed/types/feed';

interface ITileContainerProps extends IPostItem {}

const TileContainer: FC<ITileContainerProps> = (props) => {
  return (
    <TileView
      id={props.id}
      author={props.author}
      avatar={props.avatar}
      createdAt={props.createdAt}
      mediaContent={props.mediaContent}
      textContent={props.textContent}
    />
  );
};

export default memo(TileContainer);
