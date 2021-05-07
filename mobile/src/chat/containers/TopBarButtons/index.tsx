import React, { memo, FC } from 'react';
import {} from 'react-native';

// components
import TopBarButtonsView from 'chat/components/TopBarButtons';

// hooks
import { useHandleSearch } from '@/chat/hooks/useHandleSearch';
import { useHandleNewChat } from '@/chat/hooks/useHandleNewChat';

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
