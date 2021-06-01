import React, { memo, FC } from 'react';

// components
import ChatView from 'chat/chatList/components/Chat';

interface IChatListContainerProps {}

const ChatList: FC<IChatListContainerProps> = () => {
  console.log('rerender ChatListContainer');

  return <ChatView />;
};

export default memo(ChatList);
