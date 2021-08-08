import { useGetChatByIdQuery } from '@/common/types/gql.generated';

// utils
import { getChatTitle } from '@/chat/chatList/utils/getChatTitle';

export const useGetChatInfo = (
  chatId: string,
): [
  title: string,
  memberCount: number,
  image: string | null,
  isDialog: boolean,
] => {
  const chat = useGetChatByIdQuery({
    variables: { chatId: chatId },
  });

  const { data } = chat;

  if (!data || !data.getChatById) {
    return ['', 0, '', true];
  }

  return [
    getChatTitle(chat),
    data.getChatById.participants.length,
    data.getChatById.logo || null,
    data.getChatById.isDialog,
  ];
};
