import { useNavigation, useRoute } from '@react-navigation/native';
import React, { FC, memo, useEffect, useState } from 'react';

// components
import ChatPreferencesHeaderTileView from '../../components/ChatPreferencesHeaderTile';

// common components
import IconButton from '@/common/components/Button/IconButton';

// types
import { ChatRouteProp } from '@/chat/chatList/types/routes';
import { useGetChatInfo } from '../../hooks/useGetChatInfo';
import { IconType } from '@/common/types/styles';
import { useUpdateChatTitle } from '../../hooks/useUpdateChatTitle';
import { useClearChatHistory } from '../../hooks/useClearChatHistory';
import { useLeaveChat } from '../../hooks/useLeaveChat';
import { useUpdateChatLogo } from '../../hooks/useUpdateChatLogo';
import { resolveImagePromise } from '@/common/utils/resolveLogoPromise';

interface IChatPreferencesHeaderTileContainerProps {}

const ChatPreferencesHeaderTileContainer: FC<IChatPreferencesHeaderTileContainerProps> = () => {
  const navigation = useNavigation();
  const { params } = useRoute<ChatRouteProp>();
  const [title, memberCount, image, isDialog] = useGetChatInfo(params.chatId);
  const [logo, setLogo] = useState<string | null>(null);
  const [currentTitle, setCurrentTitle] = useState<string>(title);
  const edit = useUpdateChatTitle(params.chatId, currentTitle, title);

  useEffect(() => {
    const goBack = () => {
      edit();
      navigation.goBack();
    };

    const headerLeft = () => (
      <IconButton
        icon="back"
        onPress={goBack}
        iconType={IconType.LARGE}
        // eslint-disable-next-line react-native/no-inline-styles
        containerStyle={{ marginLeft: 10 }}
      />
    );
    navigation.setOptions({ headerLeft });
  }, [navigation, edit]);

  useEffect(() => {
    resolveImagePromise(image, setLogo);
  }, [image]);

  const onLeave = useLeaveChat(params.chatId);
  const onClear = useClearChatHistory(params.chatId);
  const onPhoto = useUpdateChatLogo();

  return (
    <ChatPreferencesHeaderTileView
      chatTitle={currentTitle}
      memberCount={memberCount}
      image={logo}
      isDialog={isDialog}
      onChatTitleChange={setCurrentTitle}
      onClearHistoryPress={onClear}
      onChangePhotoPress={onPhoto}
      onLeavePress={onLeave}
    />
  );
};

export default memo(ChatPreferencesHeaderTileContainer);
