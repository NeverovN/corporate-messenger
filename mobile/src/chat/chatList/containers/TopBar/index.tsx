import React, { memo, FC } from 'react';

// components
import TopBarView from 'chat/chatList/components/TopBar';

// hooks
import { useHandleSearch } from 'chat/chatList/hooks/useHandleSearch';
import { useHandleNewPlusPressed } from 'chat/chatList/hooks/useHandlePlusPressed';

interface ITopBarContainerProps {
  setFilter(filter: string): void;
}

const TopBarContainer: FC<ITopBarContainerProps> = (props) => {
  const handleSearch = useHandleSearch();
  const handlePlusButton = useHandleNewPlusPressed();

  return (
    <TopBarView
      onSearchPress={handleSearch}
      onNewChatPress={handlePlusButton}
      setFilter={props.setFilter}
    />
  );
};

export default memo(TopBarContainer);
