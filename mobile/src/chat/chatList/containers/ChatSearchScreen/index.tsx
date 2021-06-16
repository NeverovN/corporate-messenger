import React, { FC, memo, useState } from 'react';

// components
import ChatSearchScreenView from 'chat/chatList/components/ChatSearchScreen';

// hooks
import { useGetSearch } from 'chat/chatList/hooks/useGetSearch';

interface IChatSearchScreenContainerProps {}

const ChatSearchScreenContainer: FC<IChatSearchScreenContainerProps> = () => {
  const [searchString, setSearchString] = useState<string>('');
  const search = useGetSearch(searchString);
  return (
    <ChatSearchScreenView
      filter={searchString}
      onChangeFilter={setSearchString}
      search={search}
    />
  );
};

export default memo(ChatSearchScreenContainer);
