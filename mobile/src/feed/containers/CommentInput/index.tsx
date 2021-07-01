import React, { FC, memo, useState } from 'react';

// component
import CommentInputView from '@/feed/components/CommentInput';
import { useOnSentComment } from '@/feed/hooks/useOnSentComment';

interface ICommentInputContainerProps {}

const CommentInputContainer: FC<ICommentInputContainerProps> = () => {
  const [comment, setComment] = useState<string>('');
  const onSent = useOnSentComment(comment, setComment);
  return (
    <CommentInputView
      comment={comment}
      onCommentChange={setComment}
      onCommentSend={onSent}
    />
  );
};

export default memo(CommentInputContainer);
