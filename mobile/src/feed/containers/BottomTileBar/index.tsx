import React, { FC, memo } from 'react';

// components
import BottomTileBarView from '@/feed/components/BottomTileBar';
import { useOnLikePressed } from '@/feed/hooks/useOnLikePressed';
import { useGetLikes } from '@/feed/hooks/useGetLikes';
import { useOnCommentPressed } from '@/feed/hooks/useOnCommentPressed';
import { useGetCommentsCount } from '@/feed/hooks/useGetCommentsCount';

interface IBottomTileBarContainerProps {
  postId: string;
}

const BottomTileBarContainer: FC<IBottomTileBarContainerProps> = (props) => {
  const onLikePressed = useOnLikePressed(props.postId);
  const likeCount = useGetLikes(props.postId);
  const onCommentPressed = useOnCommentPressed(props.postId);
  const commentCount = useGetCommentsCount(props.postId);
  return (
    <BottomTileBarView
      onLikePressed={onLikePressed}
      likeCount={likeCount}
      onCommentPressed={onCommentPressed}
      commentCount={commentCount}
    />
  );
};

export default memo(BottomTileBarContainer);
