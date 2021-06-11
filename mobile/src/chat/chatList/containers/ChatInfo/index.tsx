import React, { memo, FC } from 'react';

// components
import ChatInfoView from 'chat/chatList/components/ChatInfo';

// hooks
import { useGetChatInfo } from 'chat/chatList/hooks/useGetChatInfo';

interface IUserInfoContainerProps {
  chatId: string;
}

const UserInfoContainer: FC<IUserInfoContainerProps> = (props) => {
  const data = useGetChatInfo(props.chatId);
  return <ChatInfoView userName={data.chatTitle} lastMessage={data.lastMsg} />;
};

export default memo(UserInfoContainer);
