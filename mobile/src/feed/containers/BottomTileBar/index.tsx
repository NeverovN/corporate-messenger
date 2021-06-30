import React, { FC, memo } from 'react';

// components
import BottomTileBarView from '@/feed/components/BottomTileBar';
import { useOnCommentPressed } from '@/feed/hooks/useOnCommentPressed';
import { useGetCommentsCount } from '@/feed/hooks/useGetCommentsCount';

interface IBottomTileBarContainerProps {
  postId: string;
}

const BottomTileBarContainer: FC<IBottomTileBarContainerProps> = (props) => {
  const onCommentPressed = useOnCommentPressed(props.postId);
  const commentCount = useGetCommentsCount(props.postId);
  return (
    <BottomTileBarView
      onCommentPressed={onCommentPressed}
      commentCount={commentCount}
    />
  );
};

export default memo(BottomTileBarContainer);
