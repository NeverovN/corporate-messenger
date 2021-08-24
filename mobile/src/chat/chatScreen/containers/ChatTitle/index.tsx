import { useRoute } from '@react-navigation/native';
import React, { FC, memo, useEffect, useState } from 'react';

// component
import ChatTitleView from '../../components/ChatTitle';

// types
import { useChatPreferencesRedirection } from '../../hooks/useChatPreferencesRedirection';
import { ChatRouteProp } from 'chat/chatList/types/routes';

// hooks
import { useGetChatInfo } from '@/chat/chatScreen/hooks/useGetChatInfo';

interface IChatTitleContainerProps {}

const ChatTitleContainer: FC<IChatTitleContainerProps> = () => {
  const redirection = useChatPreferencesRedirection();
  const { params } = useRoute<ChatRouteProp>();
  const [title, memberCount, image, isDialog] = useGetChatInfo(params.chatId);

  return (
    <ChatTitleView
      onPress={redirection}
      chatTitle={title}
      memberCount={memberCount}
      image={image}
      isDialog={isDialog}
    />
  );
};

export default memo(ChatTitleContainer);
