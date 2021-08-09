import { GetChatByIdQueryResult } from '@/common/types/gql.generated';
import { getUsername } from '@/profile/utils/getUsername';

export const getChatTitle = (chat: GetChatByIdQueryResult) => {
  if (!chat.data || !chat.data.getChatById) {
    return '';
  }
  if (!chat.data.getChatById.isDialog) {
    return chat.data.getChatById.title;
  }
  const participant = chat.data.getChatById.participants.find(
    (user) => user?.id !== chat.data?.getUser.id,
  );

  const chatTitle = getUsername(
    participant?.firstName || '',
    participant?.lastName || '',
  );
  return chatTitle;
};
