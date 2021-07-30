import { useGetChatByIdQuery } from '@/common/types/gql.generated';

export const useGetChatInfo = (
  chatId: string,
): [
  title: string,
  memberCount: number,
  image: string | null,
  isDialog: boolean,
] => {
  const { data } = useGetChatByIdQuery({
    variables: { chatId: chatId },
  });

  if (!data || !data.getChatById) {
    return ['', 0, '', true];
  }

  return [
    data.getChatById.title,
    data.getChatById.participants.length,
    data.getChatById.logo || null,
    data.getChatById.isDialog,
  ];
};
