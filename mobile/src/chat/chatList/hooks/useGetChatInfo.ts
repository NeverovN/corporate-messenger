import {
  useGetChatByIdQuery,
  useGetUserQuery,
} from '@/common/types/gql.generated';

export const useGetChatInfo = (chatId: string) => {
  const { data: chat } = useGetChatByIdQuery({ variables: { chatId } });

  const { data: user } = useGetUserQuery();

  if (
    !chat ||
    !chat.getChatById ||
    !chat.getChatById.messages ||
    !chat.getChatById.messages[0] ||
    !user ||
    !user.getUser
  ) {
    return {
      chatTitle: 'defChatTitle',
      lastMsg: 'defLastMsg',
    };
  }

  const interlocutor = chat.getChatById.participants.filter(
    (participant) => participant?.id !== user.getUser.id,
  )[0];

  const lastMsg =
    chat.getChatById.messages[0].content.length > 20
      ? chat.getChatById.messages[0].content.slice(0, 20) + '...'
      : chat.getChatById.messages[0].content;

  return {
    chatTitle: `${interlocutor?.firstName} ${interlocutor?.lastName}`,
    lastMsg: lastMsg,
  };
};
