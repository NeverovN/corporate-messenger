import React, { FC, memo } from 'react';

import ChatItemView from 'chat/chatList/components/ChatItem';

// hooks
import { useOnChatPressed } from '../../hooks/useOnChatPressed';

interface IChatItemContainerProps {
  chatId: string;
}

const ChatItemContainer: FC<IChatItemContainerProps> = (props) => {
  const redirect = useOnChatPressed(props.chatId);

  return <ChatItemView onPress={redirect} />;
};

export default memo(ChatItemContainer);
