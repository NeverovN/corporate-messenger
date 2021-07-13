import React, { FC, memo } from 'react';

// components
import CommentView from '@/feed/components/Comment';

// constants
import ACTIONS from '@/feed/constants/actions';

// hooks
import { useGetCommentInfo } from '@/feed/hooks/useGetCommentInfo';
import { getDate } from '@/feed/utils/getDate';
import { useLikeComment } from '@/feed/hooks/useLikeComment';
import ContextMenu from 'react-native-context-menu-view';
import { useHandleChatActions } from '@/feed/hooks/useHandleCommentActions';

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
  const actionHandler = useHandleChatActions();
  return (
    <ContextMenu
      title={'Comment Actions'}
      actions={[{ title: ACTIONS.DELETE_COMMENT, destructive: true }]}
      onPress={(e) => actionHandler(e.nativeEvent.name, props.id)}>
      <CommentView
        authorName={commentInfo.username}
        authorAvatar={commentInfo.userAvatar}
        createdAt={date}
        content={props.content}
        likeCount={commentInfo.likeCount}
        toggleLike={toggleLike}
      />
    </ContextMenu>
  );
};

export default memo(CommentContainer);
