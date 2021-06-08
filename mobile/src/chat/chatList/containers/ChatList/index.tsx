import React, { FC, memo } from 'react';
import { useNavigation } from '@react-navigation/native';

// components
import ChatsView from 'chat/chatList/components/ChatList';

// hooks
import { useChatList } from 'chat/chatList/hooks/useChatList';

// types
import { SharedStackNavigationProp } from 'app/types/routes';
import { useNewChatSubscription } from '@/common/types/gql.generated';

interface IChatsContainerProps {}

const ChatsContainer: FC<IChatsContainerProps> = () => {
  const navigation = useNavigation<SharedStackNavigationProp>();

  const chatsData = useChatList(navigation);

  useNewChatSubscription({
    onSubscriptionData: (data) =>
      console.log('new chat created: ', data.subscriptionData.data?.newChat),
  });

  console.log('chat list re-render');

  return <ChatsView data={chatsData} />;
};

export default memo(ChatsContainer);
