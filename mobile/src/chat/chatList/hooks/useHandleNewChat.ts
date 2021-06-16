import { selectedFriendsVar } from '@/common/cache/cache';
import {
  useCreateChatMutation,
  ChatFragmentFragmentDoc,
} from '@/common/types/gql.generated';
import { useNavigation } from '@react-navigation/native';

// types
import { SharedStackNavigationProp } from '@/app/types/routes';

// routes
import { SHARED_STACK_NAME, CHAT_STACK_NAME } from 'app/constants/routes';
import { Alert } from 'react-native';

export const useHandleNewChat = () => {
  const navigation = useNavigation<SharedStackNavigationProp>();
  const [createChat] = useCreateChatMutation({
    update: (cache, { data }) => {
      if (!data) {
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

  return () => {
    if (selectedFriendsVar().length === 0) {
      Alert.alert('Error', 'Please, choose any participants');
      return;
    }
    createChat({ variables: { participants: selectedFriendsVar() } });
    selectedFriendsVar([]);
  };
};
