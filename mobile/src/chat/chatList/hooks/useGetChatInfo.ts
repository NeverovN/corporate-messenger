import {
  useGetChatByIdQuery,
  useGetUserQuery,
} from '@/common/types/gql.generated';

// utils
import { setInterlocutor } from 'chat/chatList/utils/setInterlocutor';
import { setLastMessage } from 'chat/chatList/utils/setLastMessage';

export const useGetChatInfo = (chatId: string) => {
  const chatResult = useGetChatByIdQuery({ variables: { chatId } });
  const userResult = useGetUserQuery();

  const interlocutor = setInterlocutor(chatResult, userResult);
  const lastMsg = setLastMessage(chatResult);

  return {
    chatTitle: interlocutor,
    lastMsg: lastMsg,
  };
};
