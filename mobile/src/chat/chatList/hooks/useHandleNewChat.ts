import { selectedFriendsVar } from '@/common/cache/cache';
import { useCreateChatMutation } from '@/common/types/gql.generated';
import { useNavigation, StackActions } from '@react-navigation/native';

// types
import { SharedStackNavigationProp } from '@/app/types/routes';

// routes
import { SHARED_STACK_NAME, CHAT_STACK_NAME } from 'app/constants/routes';
import { Alert } from 'react-native';

export const useHandleNewChat = (title: string) => {
  const navigation = useNavigation<SharedStackNavigationProp>();
  const [createChat] = useCreateChatMutation({
    update: (_, { data }) => {
      if (!data) {
        return;
      }

      navigation.dispatch(
        StackActions.replace(SHARED_STACK_NAME, {
          screen: CHAT_STACK_NAME,
          params: { screen: 'Chat', params: { chatId: data.createChat.id } },
        }),
      );
    },
  });

  if (selectedFriendsVar().length === 0) {
    return () => Alert.alert('Error', 'Please, choose any participants');
  }

  if (!title) {
    return () => Alert.alert('Error', 'Please set chat title');
  }

  return async () => {
    try {
      await createChat({
        variables: {
          input: { participants: selectedFriendsVar(), title },
        },
      });
      selectedFriendsVar([]);
    } catch (error) {
      Alert.alert('Error', `${error}`);
    }
  };
};
