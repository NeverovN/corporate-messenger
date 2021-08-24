import React, { FC, memo } from 'react';
import SimplePopupMenu, { PopupMenuItem } from 'react-native-simple-popup-menu';
// components
import PostMenuButtonView from '@/feed/components/PostMenuButton';

// constants
import ACTIONS from '@/feed/constants/actions';

// hooks
import { useHandlePostActions } from '@/feed/hooks/useHandlePostActions';
import { useGetPost } from '@/feed/hooks/useGetPost';
import { useGetPostItems } from 'feed/hooks/useGetPostItems';
interface IPostMenuButtonContainerProps {
  postId: string;
}

const currentUserPostItems: PopupMenuItem[] = [
  { id: ACTIONS.EDIT_POST, label: 'Edit' },
  { id: ACTIONS.DELETE_POST, label: 'Delete' },
];

const otherUserPostItems: PopupMenuItem[] = [
  { id: ACTIONS.COMPLAIN_POST, label: 'Complain' },
];

const PostMenuButtonContainer: FC<IPostMenuButtonContainerProps> = (props) => {
  const actionsHandler = useHandlePostActions();
  const post = useGetPost(props.postId);

  const items = useGetPostItems(
    post.author.id,
    currentUserPostItems,
    otherUserPostItems,
  );

  return (
    <SimplePopupMenu
      items={items}
      onSelect={({ id }: PopupMenuItem) => actionsHandler(id, post)}>
      <PostMenuButtonView />
    </SimplePopupMenu>
  );
};

export default memo(PostMenuButtonContainer);
