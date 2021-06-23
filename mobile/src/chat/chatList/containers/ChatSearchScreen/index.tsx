import React, { FC, memo, useState } from 'react';

// components
import ChatSearchScreenView from 'chat/chatList/components/ChatSearchScreen';

// hooks
import { useSearch } from '@/chat/chatList/hooks/useSearch';

interface IChatSearchScreenContainerProps {}

const ChatSearchScreenContainer: FC<IChatSearchScreenContainerProps> = () => {
  const [filter, setFilter] = useState<string>('');
  const search = useSearch(filter);
  return (
    <ChatSearchScreenView
      filter={filter}
      onChangeFilter={setFilter}
      search={search}
    />
  );
};

export default memo(ChatSearchScreenContainer);
