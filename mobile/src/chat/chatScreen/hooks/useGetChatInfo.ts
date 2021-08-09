import { useGetChatByIdQuery } from '@/common/types/gql.generated';
import { MediaUploader } from '../utils/MediaUploader';

// utils
import { getChatTitle } from '@/chat/chatList/utils/getChatTitle';

export const useGetChatInfo = (
  chatId: string,
): [
  title: string,
  memberCount: number,
  image: Promise<string | null> | null,
  isDialog: boolean,
] => {
  const chat = useGetChatByIdQuery({
    variables: { chatId: chatId },
  });

  const { data } = chat;

  if (!data || !data.getChatById) {
    return ['', 0, null, true];
  }

  const logo = MediaUploader.getChatLogoFromFirebase(
    data.getChatById.logo || null,
  );

  return [
    getChatTitle(chat),
    data.getChatById.participants.length,
    logo,
    data.getChatById.isDialog,
  ];
};
