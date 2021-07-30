import { selectedFriendsVar } from '@/common/cache/cache';
import React, { FC, memo, useState } from 'react';

// components
import NewChatSetupHeaderTileView from '../../components/NewChatSetupHeaderTile';
import { useSetNewChatLogo } from '../../hooks/useSetNewChatLogo';

interface IChatPreferencesHeaderTileContainerProps {
  currentTitle: string;
  setCurrentTitle(currentTitle: string): void;
}

const ChatPreferencesHeaderTileContainer: FC<IChatPreferencesHeaderTileContainerProps> = (
  props,
) => {
  const memberCount = selectedFriendsVar().length + 1;
  const [image, setImage] = useState<string>('');
  const onPhoto = useSetNewChatLogo(setImage);

  return (
    <NewChatSetupHeaderTileView
      chatTitle={props.currentTitle}
      memberCount={memberCount}
      image={image}
      onChatTitleChange={props.setCurrentTitle}
      onChangePhotoPress={onPhoto}
    />
  );
};

export default memo(ChatPreferencesHeaderTileContainer);
