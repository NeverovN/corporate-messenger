import React, { FC, memo } from 'react';

// components
import ChatsView from 'chat/chatList/components/ChatList';

// hooks
import { useChatList } from 'chat/chatList/hooks/useChatList';

interface IChatsContainerProps {}

const ChatsContainer: FC<IChatsContainerProps> = () => {
  const chatsData = useChatList();

  return <ChatsView data={chatsData} />;
};

export default memo(ChatsContainer);
