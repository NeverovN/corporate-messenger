import { useRoute } from '@react-navigation/native';
import React, { FC, memo, useEffect, useState } from 'react';

// component
import ChatTitleView from '../../components/ChatTitle';

// types
import { useChatPreferencesRedirection } from '../../hooks/useChatPreferencesRedirection';
import { ChatRouteProp } from 'chat/chatList/types/routes';

// hooks
import { useGetChatInfo } from '@/chat/chatScreen/hooks/useGetChatInfo';
import { resolveLogoPromise } from '@/chat/chatList/utils/resolveLogoPromise';

interface IChatTitleContainerProps {}

const ChatTitleContainer: FC<IChatTitleContainerProps> = () => {
  const redirection = useChatPreferencesRedirection();
  const { params } = useRoute<ChatRouteProp>();
  const [title, memberCount, image, isDialog] = useGetChatInfo(params.chatId);
  const [logo, setLogo] = useState<string | null>(null);

  useEffect(() => {
    resolveLogoPromise(image, setLogo);
  }, [image]);

  return (
    <ChatTitleView
      onPress={redirection}
      chatTitle={title}
      memberCount={memberCount}
      image={logo}
      isDialog={isDialog}
    />
  );
};

export default memo(ChatTitleContainer);
