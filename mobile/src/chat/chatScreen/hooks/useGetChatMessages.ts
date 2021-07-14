import {
  useNewMessageSubscription,
  useGetChatByIdQuery,
  MessageFragmentFragmentDoc,
} from '@/common/types/gql.generated';
import { useApolloClient } from '@apollo/client';
import { useRoute } from '@react-navigation/native';

// types
import { ChatRouteProp } from '../../chatList/types/routes';

export const useGetChatMessages = () => {
  const { params } = useRoute<ChatRouteProp>();

  const client = useApolloClient();

  if (!params) {
    throw Error('chat does not exist');
  }

  const { data } = useGetChatByIdQuery({
    variables: { chatId: params.chatId },
  });

  useNewMessageSubscription({
    variables: { chatId: params.chatId },
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

  if (
    !data ||
    !data.getUser ||
    !data.getChatById ||
    !data.getChatById.messages
  ) {
    return [] as any;
  }

  const messages = data.getChatById.messages.map((el) => {
    if (!el) {
      return [] as any;
    }

    const isRead =
      el.readBy.length > 1 &&
      el.readBy.find((user) => user.id === data.getUser.id);

    return {
      currentUserId: data.getUser.id,
      id: el.id,
      content: el.content,
      createdAt: el.createdAt,
      author: el.author.id,
      name: `${el.author.firstName} ${el.author.lastName}`,
      lastEdit: el.lastEdit,
      isRead: isRead,
    };
  });

  return messages;
};
