import React, { FC, memo } from 'react';
import SimplePopupMenu, { PopupMenuItem } from 'react-native-simple-popup-menu';
// components
import PostMenuButtonView from '@/feed/components/PostMenuButton';

// constants
import ACTIONS from '@/feed/constants/actions';

// hooks
import { useHandlePostActions } from '@/feed/hooks/useHandlePostActions';
import { useGetPost } from '@/feed/hooks/useGetPost';

interface IPostMenuButtonContainerProps {
  postId: string;
}

const items: PopupMenuItem[] = [
  { id: ACTIONS.EDIT_POST, label: 'Edit' },
  { id: ACTIONS.DELETE_POST, label: 'Delete' },
];

const PostMenuButtonContainer: FC<IPostMenuButtonContainerProps> = (props) => {
  const actionsHandler = useHandlePostActions();
  const post = useGetPost(props.postId);

  return (
    <SimplePopupMenu
      items={items}
      onSelect={({ id }: PopupMenuItem) => actionsHandler(id, post)}>
      <PostMenuButtonView />
    </SimplePopupMenu>
  );
};

export default memo(PostMenuButtonContainer);
