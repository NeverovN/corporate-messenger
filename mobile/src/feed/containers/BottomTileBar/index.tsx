import React, { FC, memo } from 'react';

// components
import BottomTileBarView from '@/feed/components/BottomTileBar';
import { useOnLikePressed } from '@/feed/hooks/useOnLikePressed';
import { useGetLikes } from '@/feed/hooks/useGetLikes';
import { usePostRedirection } from '@/feed/hooks/usePostRedirection';
import { useGetCommentsCount } from '@/feed/hooks/useGetCommentsCount';

interface IBottomTileBarContainerProps {
  postId: string;
}

const BottomTileBarContainer: FC<IBottomTileBarContainerProps> = (props) => {
  const onLikePressed = useOnLikePressed(props.postId);
  const { likeCount, liked } = useGetLikes(props.postId);
  const onCommentPressed = usePostRedirection(props.postId, true);
  const commentCount = useGetCommentsCount(props.postId);
  return (
    <BottomTileBarView
      liked={liked}
      onLikePressed={onLikePressed}
      likeCount={likeCount}
      onCommentPressed={onCommentPressed}
      commentCount={commentCount}
    />
  );
};

export default memo(BottomTileBarContainer);
