import React, { memo, FC } from 'react';

// components
import ChatInfoView from 'chat/chatList/components/ChatInfo';

// hooks
import { useGetChatInfo } from 'chat/chatList/hooks/useGetChatInfo';
import { useOnNewMessageUpdate } from '../../hooks/useOnNewMessageUpdate';

interface IUserInfoContainerProps {
  chatId: string;
}

const UserInfoContainer: FC<IUserInfoContainerProps> = ({ chatId }) => {
  useOnNewMessageUpdate(chatId);
  console.log('update');
  const data = useGetChatInfo(chatId);
  return <ChatInfoView userName={data.chatTitle} lastMessage={data.lastMsg} />;
};

export default memo(UserInfoContainer);
