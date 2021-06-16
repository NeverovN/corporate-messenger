import {
  GetChatByIdQueryResult,
  GetUserQueryResult,
} from 'common/types/gql.generated';

export const setInterlocutor = (
  chat: GetChatByIdQueryResult,
  user: GetUserQueryResult,
) => {
  return chat.data?.getChatById?.participants.filter(
    (participant) => participant?.id !== user.data?.getUser.id,
  )[0];
};
