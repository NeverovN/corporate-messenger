import React, { FC, memo } from 'react';

// components
import ChatPreferencesScreenView from '../../components/ChatPreferencesScreen';

// hooks
import { useGetChatMembers } from '../../hooks/useGetChatMembers';

interface IChatPreferencesScreenContainerProps {}

const ChatPreferencesScreenContainer: FC<IChatPreferencesScreenContainerProps> = () => {
  const members = useGetChatMembers();
  return <ChatPreferencesScreenView members={members} />;
};

export default memo(ChatPreferencesScreenContainer);
