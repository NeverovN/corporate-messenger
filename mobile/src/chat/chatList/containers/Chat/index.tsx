import React, { memo, FC } from 'react';

// components
import ChatView from 'chat/chatList/components/Chat';
import { useRoute } from '@react-navigation/native';

interface IChatListContainerProps {}

const ChatList: FC<IChatListContainerProps> = () => {
  console.log('re-render ChatListContainer');
  const route = useRoute();
  console.log('chatList', route);

  return <ChatView />;
};

export default memo(ChatList);
