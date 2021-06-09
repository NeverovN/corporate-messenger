import {
  useNewMessageSubscription,
  useGetChatByIdQuery,
} from '@/common/types/gql.generated';
import { useRoute } from '@react-navigation/native';

// types
import { ChatRouteProp } from '../../chatList/types/routes';

export const useGetChatMessages = () => {
  const { params } = useRoute<ChatRouteProp>();

  if (!params) {
    throw Error('chat does not exist');
  }

  const { data: queryData } = useGetChatByIdQuery({
    variables: { chatId: params.chatId },
  });

  useNewMessageSubscription({
    variables: { chatId: params.chatId },
  });

  if (!queryData || !queryData.getChatById || !queryData.getChatById.messages) {
    return [] as any;
  }

  const messages = queryData.getChatById.messages.map((el) => {
    if (!el) {
      return [] as any;
    }

    return {
      id: el.id,
      content: el.content,
      createdAt: el.createdAt,
      author: el.author,
      onPress: () => console.log(`message ${el.id} pressed`),
    };
  });

  return messages;
};
