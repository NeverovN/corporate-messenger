import {
  useGetChatByIdQuery,
  useGetUserQuery,
} from '@/common/types/gql.generated';

export const useGetChatInfo = (chatId: string) => {
  const { data: chat } = useGetChatByIdQuery({ variables: { chatId } });

  const { data: user } = useGetUserQuery();

  const interlocutor = chat?.getChatById?.participants.filter(
    (participant) => participant?.id !== user?.getUser.id,
  )[0];

  const name =
    (interlocutor?.firstName || '') + ' ' + (interlocutor?.lastName || '');

  const lastMsg = chat?.getChatById?.messages?.find(() => true)?.content;

  return {
    chatTitle: name,
    lastMsg: lastMsg,
  };
};
