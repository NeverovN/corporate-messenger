import { useGetChatByIdQuery } from '@/common/types/gql.generated';

// utils
import { setLastMessage } from 'chat/chatList/utils/setLastMessage';
import { getChatTitle } from '../utils/getChatTitle';

export const useGetChatInfo = (chatId: string) => {
  const chatResult = useGetChatByIdQuery({ variables: { chatId } });

  const title = getChatTitle(chatResult);
  const lastMsg = setLastMessage(chatResult);

  return {
    chatTitle: title || '',
    lastMsg: lastMsg || '',
  };
};
