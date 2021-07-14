import React, { FC, memo, useState } from 'react';

// components
import ChatScreenView from 'chat/chatScreen/components/ChatScreen';
import { IMessageItem } from '../../types/message';

interface IChatScreenContainerProps {}

const ChatScreenContainer: FC<IChatScreenContainerProps> = () => {
  const [editMessage, setEditMessage] = useState<IMessageItem | null>(null);
  console.log(editMessage);
  return (
    <ChatScreenView editMessage={editMessage} setEditMessage={setEditMessage} />
  );
};

export default memo(ChatScreenContainer);
