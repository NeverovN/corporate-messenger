import React, { FC, memo } from 'react';
import SimplePopupMenu from 'react-native-simple-popup-menu';

// components
import PostMenuButtonView from '@/feed/components/PostMenuButton';

// constants
import ACTIONS from '@/feed/constants/actions';

// hooks
import { useHandlePostActions } from '@/feed/hooks/useHandlePostActions';

interface IPostMenuButtonContainerProps {
  postId: string;
}

const items = [
  { id: ACTIONS.EDIT_POST, label: 'Edit' },
  { id: ACTIONS.DELETE_POST, label: 'Delete' },
];

const PostMenuButtonContainer: FC<IPostMenuButtonContainerProps> = (props) => {
  const actionsHandler = useHandlePostActions();

  return (
    <SimplePopupMenu
      items={items}
      onSelect={(e) => actionsHandler(e.id, props.postId)}
      onCancel={() => console.log('onCancel')}>
      <PostMenuButtonView />
    </SimplePopupMenu>
  );
};

export default memo(PostMenuButtonContainer);
