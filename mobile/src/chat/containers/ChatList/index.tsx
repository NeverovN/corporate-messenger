import React, { memo, FC } from 'react';

// components
import ChatListView from 'chat/components/ChatList';

interface IChatListContainerProps {}

const ChatList: FC<IChatListContainerProps> = () => {
  return <ChatListView />;
};

export default memo(ChatList);
