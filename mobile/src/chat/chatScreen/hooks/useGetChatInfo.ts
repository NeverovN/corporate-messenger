import { useGetChatByIdQuery } from '@/common/types/gql.generated';
import { MediaUploader } from '../utils/MediaUploader';

export const useGetChatInfo = (
  chatId: string,
): [
  title: string,
  memberCount: number,
  image: Promise<string | null> | null,
  isDialog: boolean,
] => {
  const { data } = useGetChatByIdQuery({
    variables: { chatId: chatId },
  });

  if (!data || !data.getChatById) {
    return ['', 0, null, true];
  }

  const logo = MediaUploader.getChatLogoFromFirebase(
    data.getChatById.logo || null,
  );

  return [
    data.getChatById.title,
    data.getChatById.participants.length,
    logo,
    data.getChatById.isDialog,
  ];
};
