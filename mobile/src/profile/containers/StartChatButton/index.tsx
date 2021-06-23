import React, { FC, memo } from 'react';
import { useRoute } from '@react-navigation/native';

// components
import StartChatButtonView from 'profile/components/StartChatButton';

// hooks
import { useHandleStartChat } from 'profile/hooks/useHandleStartChat';

// types
import { ThirdPartyUserRouteProp } from 'profile/types/routes';

interface IStartChatButtonContainerProps {}

const StartChatButtonContainer: FC<IStartChatButtonContainerProps> = () => {
  const { params } = useRoute<ThirdPartyUserRouteProp>();
  const handleStartChat = useHandleStartChat(params.userId, params.username);

  return <StartChatButtonView onPress={handleStartChat} />;
};

export default memo(StartChatButtonContainer);
