import React, { memo, FC } from 'react';
import {} from 'react-native';

// components
import TopBarView from 'chat/chatList/components/TopBar';

// hooks
import { useHandleSearch } from 'chat/chatList/hooks/useHandleSearch';
import { useHandleNewPlusPressed } from 'chat/chatList/hooks/useHandlePlusPressed';

interface ITopBarContainerProps {}

const TopBarContainer: FC<ITopBarContainerProps> = () => {
  const handleSearch = useHandleSearch();
  const handlePlusButton = useHandleNewPlusPressed();

  return (
    <TopBarView
      onSearchPress={handleSearch}
      onNewChatPress={handlePlusButton}
    />
  );
};

export default memo(TopBarContainer);
