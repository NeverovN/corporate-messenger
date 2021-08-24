import React, { memo, FC, useState } from 'react';

// components
import ChatView from 'chat/chatList/components/Chat';

interface IChatListContainerProps {}

const ChatList: FC<IChatListContainerProps> = () => {
  const [filter, setFilter] = useState<string>('');
  return <ChatView filter={filter} setFilter={setFilter} />;
};

export default memo(ChatList);
