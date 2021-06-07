import React, { FC, memo } from 'react';

// components
import ChatScreenView from 'chat/chatScreen/components/ChatScreen';
import { useRoute } from '@react-navigation/core';

interface IChatScreenContainerProps {}

const ChatScreenContainer: FC<IChatScreenContainerProps> = () => {
  console.log(useRoute());
  return <ChatScreenView />;
};

export default memo(ChatScreenContainer);
