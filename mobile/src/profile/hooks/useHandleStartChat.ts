import {
  useCreateChatMutation,
  useGetChatsQuery,
} from '@/common/types/gql.generated';
import { useNavigation } from '@react-navigation/native';

// types
import { SharedStackNavigationProp } from 'app/types/routes';

// consts
import { SHARED_STACK_NAME, CHAT_STACK_NAME } from 'app/constants/routes';

export const useHandleStartChat = (userId: string) => {
  const { data: chats } = useGetChatsQuery();
  const navigation = useNavigation<SharedStackNavigationProp>();
  const [createChat] = useCreateChatMutation({
    update: (_, { data }) => {
      if (!data || !data?.createChat) {
        return;
      }

      navigation.navigate(SHARED_STACK_NAME, {
        screen: CHAT_STACK_NAME,
        params: { screen: 'Chat', params: { chatId: data.createChat.id } },
      });
    },
  });
  if (!chats || !chats.getChats) {
    return () => {};
  }

  const chat = chats.getChats.find((chatEl) =>
    chatEl?.participants.some((user) => user?.id === userId),
  );

  return () => {
    if (!chat) {
      createChat({ variables: { participants: [userId] } });
    } else {
      navigation.navigate(SHARED_STACK_NAME, {
        screen: CHAT_STACK_NAME,
        params: { screen: 'Chat', params: { chatId: chat.id } },
      });
    }
  };
};
