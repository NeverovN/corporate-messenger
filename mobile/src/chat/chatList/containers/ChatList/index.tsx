import React, { FC, memo } from 'react';

// components
import ChatsView from 'chat/chatList/components/ChatList';

// hooks
import { useChatList } from 'chat/chatList/hooks/useChatList';

interface IChatsContainerProps {
  filter?: string;
}

const ChatsContainer: FC<IChatsContainerProps> = (props) => {
  const { data, refresh, loading } = useChatList(props.filter || '');

  return <ChatsView data={data} refresh={refresh} loading={loading} />;
};

export default memo(ChatsContainer);
