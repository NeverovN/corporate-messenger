import React, { FC, memo } from 'react';

interface IMessageAreaContainerProps {}

// components
import MessageAreaView from 'chat/chatScreen/components/MessageArea';

// hooks
import { useGetChatMessages } from '../../hooks/useGetChatMessages';

const MessageAreaContainer: FC<IMessageAreaContainerProps> = () => {
  const messages = useGetChatMessages();

  return <MessageAreaView data={messages} />;
};

export default memo(MessageAreaContainer);
