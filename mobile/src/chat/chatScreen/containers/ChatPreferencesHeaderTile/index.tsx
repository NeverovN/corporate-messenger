import { useRoute } from '@react-navigation/native';
import React, { FC, memo, useState } from 'react';

// components
import ChatPreferencesHeaderTileView from '../../components/ChatPreferencesHeaderTile';

// types
import { ChatRouteProp } from '@/chat/chatList/types/routes';
import { useGetChatInfo } from '../../hooks/useGetChatInfo';

interface IChatPreferencesHeaderTileContainerProps {}

const ChatPreferencesHeaderTileContainer: FC<IChatPreferencesHeaderTileContainerProps> = () => {
  const { params } = useRoute<ChatRouteProp>();
  const [title, memberCount, image, isDialog] = useGetChatInfo(params.chatId);
  const [currentTitle, setCurrentTitle] = useState<string>(title);

  const onLeave = () => console.log('leave');
  const onClear = () => console.log('clear');
  const onPhoto = () => console.log('photo');

  return (
    <ChatPreferencesHeaderTileView
      chatTitle={currentTitle}
      memberCount={memberCount}
      image={image}
      isDialog={isDialog}
      onChatTitleChange={setCurrentTitle}
      onClearHistoryPress={onClear}
      onChangePhotoPress={onPhoto}
      onLeavePress={onLeave}
    />
  );
};

export default memo(ChatPreferencesHeaderTileContainer);
