import React, { memo, FC } from 'react';
import {} from 'react-native';

// components
import TopBarButtonsView from 'chat/chatList/components/TopBarButtons';

// hooks
import { useHandleSearch } from 'chat/chatList/hooks/useHandleSearch';
import { useHandleNewChat } from 'chat/chatList/hooks/useHandleNewChat';

interface ITopBarButtonsContainerProps {}

const TopBarButtonsContainer: FC<ITopBarButtonsContainerProps> = () => {
  const handleSearch = useHandleSearch();
  const handleNewChat = useHandleNewChat();

  return (
    <TopBarButtonsView
      onSearchPress={handleSearch}
      onNewChatPress={handleNewChat}
    />
  );
};

export default memo(TopBarButtonsContainer);
