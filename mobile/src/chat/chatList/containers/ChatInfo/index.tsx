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
  const data = useGetChatInfo(chatId);
  return <ChatInfoView chatTitle={data.chatTitle} lastMessage={data.lastMsg} />;
};

export default memo(UserInfoContainer);
