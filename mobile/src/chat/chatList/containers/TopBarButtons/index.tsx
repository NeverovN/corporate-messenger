import React, { memo, FC } from 'react';
import {} from 'react-native';

// components
import TopBarButtonsView from 'chat/chatList/components/TopBarButtons';

// hooks
import { useHandleSearch } from 'chat/chatList/hooks/useHandleSearch';
import { useHandleNewPlusPressed } from 'chat/chatList/hooks/useHandlePlusPressed';

interface ITopBarButtonsContainerProps {}

const TopBarButtonsContainer: FC<ITopBarButtonsContainerProps> = () => {
  const handleSearch = useHandleSearch();
  const handlePlusButton = useHandleNewPlusPressed();

  return (
    <TopBarButtonsView
      onSearchPress={handleSearch}
      onNewChatPress={handlePlusButton}
    />
  );
};

export default memo(TopBarButtonsContainer);
