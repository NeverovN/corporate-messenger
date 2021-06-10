import {
  useNewMessageSubscription,
  useGetMessagesQuery,
} from '@/common/types/gql.generated';
import { useRoute } from '@react-navigation/native';

// types
import { ChatRouteProp } from '../../chatList/types/routes';

export const useGetChatMessages = () => {
  const { params } = useRoute<ChatRouteProp>();

  if (!params) {
    throw Error('chat does not exist');
  }

  const { data } = useGetMessagesQuery({
    variables: { chatId: params.chatId },
  });

  useNewMessageSubscription({
    variables: { chatId: params.chatId },
  });

  if (!data || !data.getMessages) {
    return [] as any;
  }

  const messages = data.getMessages.map((el) => {
    if (!el) {
      return [] as any;
    }

    return {
      id: el.id,
      content: el.content,
      createdAt: el.createdAt,
      author: el.author,
    };
  });

  return messages;
};
