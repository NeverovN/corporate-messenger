import React, { FC, memo } from 'react';

// components
import CommentView from '@/feed/components/Comment';

// hooks
import { useGetCommentInfo } from '@/feed/hooks/useGetCommentInfo';
import { getDate } from '@/feed/utils/getDate';
import { useLikeComment } from '@/feed/hooks/useLikeComment';

interface ICommentContainerProps {
  id: string;
  author: string;
  content: string;
  createdAt: string;
}

const CommentContainer: FC<ICommentContainerProps> = (props) => {
  const commentInfo = useGetCommentInfo(props.author, props.id);
  const toggleLike = useLikeComment(props.id);
  const date = getDate(props.createdAt);
  return (
    <CommentView
      authorName={commentInfo.username}
      authorAvatar={commentInfo.userAvatar}
      createdAt={date}
      content={props.content}
      likeCount={commentInfo.likeCount}
      toggleLike={toggleLike}
    />
  );
};

export default memo(CommentContainer);
