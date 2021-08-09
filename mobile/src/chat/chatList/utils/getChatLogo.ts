import {
  ChatFragmentFragment,
  UserFragmentFragment,
} from '@/common/types/gql.generated';

export const getChatLogo = (
  chat: ChatFragmentFragment,
  user: UserFragmentFragment | null,
) => {
  if (!chat.isDialog) {
    return chat.logo || null;
  }

  if (!user) {
    return null;
  }

  const participant = chat.participants.find((el) => el?.id !== user.id);

  return participant?.avatar || null;
};
