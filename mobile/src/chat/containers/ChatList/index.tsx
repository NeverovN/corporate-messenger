import React, { memo, FC } from 'react';

// components
import ChatListView from '../../components/ChatList';

interface IChatListContainerProps {}

const ChatList: FC<IChatListContainerProps> = (props) => {
  return <ChatListView />;
};

export default memo(ChatList);
