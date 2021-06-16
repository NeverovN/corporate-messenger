import {
  useCreateChatMutation,
  useGetChatsQuery,
  ChatFragmentFragmentDoc,
} from '@/common/types/gql.generated';
import { useNavigation } from '@react-navigation/native';

// types
import { SharedStackNavigationProp } from 'app/types/routes';

// consts
import { SHARED_STACK_NAME, CHAT_STACK_NAME } from 'app/constants/routes';

export const useHandleStartChat = (userId: string, username: string) => {
  const { data: chats } = useGetChatsQuery();
  const navigation = useNavigation<SharedStackNavigationProp>();

  const [createChat] = useCreateChatMutation({
    update: (cache, { data }) => {
      if (!data || !data?.createChat) {
        return;
      }
      cache.modify({
        fields: {
          getChats(exChats = []) {
            try {
              const newChat = cache.writeFragment({
                fragment: ChatFragmentFragmentDoc,
                data: data.createChat,
              });

              return [...exChats, newChat];
            } catch (err) {
              throw Error(`cache update error -> ${err}`);
            }
          },
        },
      });

      navigation.navigate(SHARED_STACK_NAME, {
        screen: CHAT_STACK_NAME,
        params: { screen: 'Chat', params: { chatId: data.createChat.id } },
      });
    },
  });
  if (!chats || !chats.getChats) {
    return () => {};
  }

  const chat = chats.getChats.find((chatEl) => {
    if (chatEl?.isDialog) {
      return chatEl?.participants.some((user) => user?.id === userId);
    }
    return false;
  });

  return () => {
    if (!chat) {
      createChat({
        variables: {
          participants: [userId],
          title: username,
        },
      });
    } else {
      navigation.navigate(SHARED_STACK_NAME, {
        screen: CHAT_STACK_NAME,
        params: { screen: 'Chat', params: { chatId: chat.id } },
      });
    }
  };
};
