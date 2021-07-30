import { useRoute } from '@react-navigation/native';

// types
import { ChatPrefRouteProp } from '@/chat/chatList/types/routes';
import { useGetChatByIdQuery } from '@/common/types/gql.generated';
import { getUsername } from '@/profile/utils/getUsername';

export const useGetChatMembers = (): {
  name: string;
  avatar: string | null;
}[] => {
  const { params } = useRoute<ChatPrefRouteProp>();
  const { data } = useGetChatByIdQuery({
    variables: { chatId: params.chatId },
  });

  if (!data || !data.getChatById) {
    return [];
  }

  const members = data.getChatById.participants.map((el) => {
    if (!el) {
      return {
        name: '',
        avatar: null,
      };
    }

    const name = getUsername(el.firstName || '', el.lastName || '');

    return {
      name,
      avatar: el.avatar || null,
    };
  });

  return members;
};
