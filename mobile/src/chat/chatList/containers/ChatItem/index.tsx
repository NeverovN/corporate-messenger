import React, { FC, memo } from 'react';
import ContextMenu from 'react-native-context-menu-view';

import ChatItemView from 'chat/chatList/components/ChatItem';

// hooks
import { useOnChatPressed } from '../../hooks/useOnChatPressed';
import { useHandleChatActions } from '../../hooks/useHandleChatActions';

// consts
import ACTIONS from 'chat/chatList/constants/actions';

interface IChatItemContainerProps {
  chatId: string;
}

const ChatItemContainer: FC<IChatItemContainerProps> = (props) => {
  const redirect = useOnChatPressed(props.chatId);

  const actionHandler = useHandleChatActions();

  return (
    <ContextMenu
      title={'Chat Actions'}
      actions={[
        { title: 'Disable notifications' },
        { title: ACTIONS.DELETE, destructive: true },
      ]}
      onPress={(e) => actionHandler(e.nativeEvent.name, props.chatId)}>
      <ChatItemView onPress={redirect} chatId={props.chatId} />
    </ContextMenu>
  );
};

export default memo(ChatItemContainer);
