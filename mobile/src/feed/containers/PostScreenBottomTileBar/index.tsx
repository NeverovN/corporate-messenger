import React, { FC, memo } from 'react';

// components
import PostScreenBottomTileBarView from '@/feed/components/PostScreenBottomTileBar';

// hooks
import { useOnLikePressed } from '@/feed/hooks/useOnLikePressed';
import { useGetLikes } from '@/feed/hooks/useGetLikes';

interface IBottomTileBarContainerProps {
  postId: string;
}

const BottomTileBarContainer: FC<IBottomTileBarContainerProps> = (props) => {
  const onLikePressed = useOnLikePressed(props.postId);
  const { likeCount, liked } = useGetLikes(props.postId);
  return (
    <PostScreenBottomTileBarView
      liked={liked}
      onLikePressed={onLikePressed}
      likeCount={likeCount}
    />
  );
};

export default memo(BottomTileBarContainer);
