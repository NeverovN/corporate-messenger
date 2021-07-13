import React, { FC, memo } from 'react';

// components
import CommentView from '@/feed/components/Comment';

// constants
import ACTIONS from '@/feed/constants/actions';

// hooks
import { useGetComment } from '@/feed/hooks/useGetComment';
import { getDate } from '@/feed/utils/getDate';
import { useLikeComment } from '@/feed/hooks/useLikeComment';
import ContextMenu from 'react-native-context-menu-view';
import { useHandleCommentActions } from '@/feed/hooks/useHandleCommentActions';

interface ICommentContainerProps {
  id: string;
  author: string;
  content: string;
  createdAt: string;
}

const CommentContainer: FC<ICommentContainerProps> = (props) => {
  const comment = useGetComment(props.id);
  const toggleLike = useLikeComment(props.id);
  const date = getDate(props.createdAt);
  const actionHandler = useHandleCommentActions();
  return (
    <ContextMenu
      title={'Comment Actions'}
      actions={[
        { title: ACTIONS.EDIT_COMMENT },
        { title: ACTIONS.DELETE_COMMENT, destructive: true },
      ]}
      onPress={(e) => actionHandler(e.nativeEvent.name, comment)}>
      <CommentView
        authorName={comment.author.name}
        authorAvatar={comment.author.avatar}
        createdAt={date}
        content={props.content}
        likeCount={comment.likes}
        toggleLike={toggleLike}
      />
    </ContextMenu>
  );
};

export default memo(CommentContainer);
