import {
  useGetChatByIdQuery,
  useGetUserQuery,
} from '@/common/types/gql.generated';

export const useGetChatInfo = (chatId: string) => {
  console.log(chatId);

  const { data: chat } = useGetChatByIdQuery({ variables: { chatId } });

  const { data: user } = useGetUserQuery();

  if (
    !chat ||
    !chat.getChatById ||
    !chat.getChatById.messages ||
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

  return {
    chatTitle: `${interlocutor?.firstName} ${interlocutor?.lastName}`,
    lastMsg: `${
      chat.getChatById.messages[chat.getChatById.messages.length - 1]?.content
    }`,
  };
};
