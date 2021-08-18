import React, { FC, memo } from 'react';

// component
import TileView from 'feed/components/Tile';
import { IPostItem } from '@/feed/types/feed';

// hooks
import { usePostRedirection } from '@/feed/hooks/usePostRedirection';

interface ITileContainerProps extends IPostItem {}

const TileContainer: FC<ITileContainerProps> = (props) => {
  const postRedirection = usePostRedirection(props.id);

  return (
    <TileView
      id={props.id}
      author={props.author}
      avatar={props.avatar}
      createdAt={props.createdAt}
      mediaContent={props.mediaContent}
      textContent={props.textContent}
      onPress={postRedirection}
    />
  );
};

export default memo(TileContainer);
