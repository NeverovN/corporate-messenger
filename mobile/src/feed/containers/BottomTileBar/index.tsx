import React, { FC, memo } from 'react';

// components
import BottomTileBarView from '@/feed/components/BottomTileBar';
import { useOnLikePressed } from '@/feed/hooks/useOnLikePressed';
import { useGetLikes } from '@/feed/hooks/useGetLikes';

interface IBottomTileBarContainerProps {
  postId: string;
}

const BottomTileBarContainer: FC<IBottomTileBarContainerProps> = (props) => {
  const onLikePressed = useOnLikePressed(props.postId);
  const likeCount = useGetLikes(props.postId);
  return (
    <BottomTileBarView onLikePressed={onLikePressed} likeCount={likeCount} />
  );
};

export default memo(BottomTileBarContainer);
