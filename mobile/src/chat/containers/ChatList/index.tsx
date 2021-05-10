import React, { FC, memo } from 'react';
import { useNavigation } from '@react-navigation/native';

// components
import ChatsView from '@/chat/components/ChatList';

// hooks
import { useChatList } from 'chat/hooks/useChatList';

// types
import { SharedStackNavigationProp } from 'app/types/routes';

interface IChatsContainerProps {}

const ChatsContainer: FC<IChatsContainerProps> = () => {
  const navigation = useNavigation<SharedStackNavigationProp>();

  const chatsData = useChatList(navigation);

  return <ChatsView data={chatsData} />;
};

export default memo(ChatsContainer);
