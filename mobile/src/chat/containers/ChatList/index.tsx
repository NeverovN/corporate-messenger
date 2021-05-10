import React, { memo, FC } from 'react';

// components
import ChatListView from 'chat/components/ChatList';

interface IChatListContainerProps {}

const ChatList: FC<IChatListContainerProps> = () => {
  console.log('rerender ChatListContainer');

  return <ChatListView />;
};

export default memo(ChatList);
