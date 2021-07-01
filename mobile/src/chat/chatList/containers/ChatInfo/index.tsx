import React, { memo, FC } from 'react';

// components
import ChatInfoView from 'chat/chatList/components/ChatInfo';

// hooks
import { useGetChatInfo } from 'chat/chatList/hooks/useGetChatInfo';
import {
  MessageFragmentFragmentDoc,
  useNewMessageSubscription,
} from '@/common/types/gql.generated';
import { useApolloClient } from '@apollo/client';

interface IUserInfoContainerProps {
  chatId: string;
}

const UserInfoContainer: FC<IUserInfoContainerProps> = (props) => {
  const client = useApolloClient();
  useNewMessageSubscription({
    variables: { chatId: props.chatId },
    onSubscriptionData: ({ subscriptionData }) => {
      const message = subscriptionData.data?.newMessage;

      if (!message) {
        throw Error('update error');
      }

      client.cache.modify({
        fields: {
          getChatById() {
            try {
              client.cache.writeFragment({
                fragment: MessageFragmentFragmentDoc,
                data: message,
              });
            } catch (err) {
              throw Error(`cache update error -> ${err}`);
            }
          },
        },
      });
    },
  });
  const data = useGetChatInfo(props.chatId);
  return <ChatInfoView userName={data.chatTitle} lastMessage={data.lastMsg} />;
};

export default memo(UserInfoContainer);
