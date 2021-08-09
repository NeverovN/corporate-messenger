import React, { FC, memo, useEffect, useState } from 'react';

// component
import TileView from 'feed/components/Tile';
import { IPostItem } from '@/feed/types/feed';
import { resolveImagePromise } from '@/common/utils/resolveLogoPromise';

interface ITileContainerProps extends IPostItem {}

const TileContainer: FC<ITileContainerProps> = (props) => {
  const [avatar, setAvatar] = useState<string | null>(null);

  useEffect(() => {
    resolveImagePromise(props.avatar, setAvatar);
  }, [props.avatar]);

  return (
    <TileView
      id={props.id}
      author={props.author}
      avatar={avatar}
      createdAt={props.createdAt}
      mediaContent={props.mediaContent}
      textContent={props.textContent}
    />
  );
};

export default memo(TileContainer);
