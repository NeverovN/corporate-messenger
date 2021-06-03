import React, { memo, FC } from 'react';

// components
import ChatView from '@/chat/components/Chat';

interface IChatListContainerProps {}

const ChatList: FC<IChatListContainerProps> = () => {
  console.log('re-render ChatListContainer');

  return <ChatView />;
};

export default memo(ChatList);
