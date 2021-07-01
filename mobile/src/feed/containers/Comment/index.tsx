import React, { FC, memo } from 'react';

// components
import CommentView from '@/feed/components/Comment';

// hooks
import { useGetCommentInfo } from '@/feed/hooks/useGetCommentInfo';
import { getDate } from '@/feed/utils/getDate';

interface ICommentContainerProps {
  author: string;
  content: string;
  createdAt: string;
}

const CommentContainer: FC<ICommentContainerProps> = (props) => {
  const commentInfo = useGetCommentInfo(props.author);
  const date = getDate(props.createdAt);
  return (
    <CommentView
      authorName={commentInfo.username}
      authorAvatar={commentInfo.userAvatar}
      createdAt={date}
      content={props.content}
    />
  );
};

export default memo(CommentContainer);
