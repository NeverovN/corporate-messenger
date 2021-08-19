import React, { FC, memo, useState } from 'react';
import { useRoute } from '@react-navigation/core';

// component
import CommentInputView from '@/feed/components/CommentInput';
import { useOnSentComment } from '@/feed/hooks/useOnSentComment';

// types
import { PostScreenRouteProp } from '@/feed/types/routes';

interface ICommentInputContainerProps {}

const CommentInputContainer: FC<ICommentInputContainerProps> = () => {
  const [comment, setComment] = useState<string>('');
  const onSent = useOnSentComment(comment, setComment);
  const { params } = useRoute<PostScreenRouteProp>();

  return (
    <CommentInputView
      isFocused={params.isToComment}
      comment={comment}
      onCommentChange={setComment}
      onCommentSend={onSent}
    />
  );
};

export default memo(CommentInputContainer);
