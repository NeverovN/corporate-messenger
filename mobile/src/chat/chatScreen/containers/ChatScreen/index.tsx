import React, { FC, memo } from 'react';

// components
import ChatScreenView from 'chat/chatScreen/components/ChatScreen';

interface IChatScreenContainerProps {}

const ChatScreenContainer: FC<IChatScreenContainerProps> = () => {
  return <ChatScreenView />;
};

export default memo(ChatScreenContainer);
