import {
  useCreateDialogMutation,
  useGetChatsQuery,
  ChatFragmentFragmentDoc,
} from '@/common/types/gql.generated';
import { useNavigation } from '@react-navigation/native';

// types
import { SharedStackNavigationProp } from 'app/types/routes';

// consts
import { SHARED_STACK_NAME, CHAT_STACK_NAME } from 'app/constants/routes';

export const useHandleStartChat = (userId: string) => {
  const { data: chats } = useGetChatsQuery();
  const navigation = useNavigation<SharedStackNavigationProp>();

  const [createDialog] = useCreateDialogMutation({
    update: (cache, { data }) => {
      if (!data || !data?.createDialog) {
        return;
      }
      cache.modify({
        fields: {
          getChats(exChats = []) {
            try {
              const newChat = cache.writeFragment({
                fragment: ChatFragmentFragmentDoc,
                data: data.createDialog,
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
        params: { screen: 'Chat', params: { chatId: data.createDialog.id } },
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
      createDialog({
        variables: {
          input: { participant: userId },
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
