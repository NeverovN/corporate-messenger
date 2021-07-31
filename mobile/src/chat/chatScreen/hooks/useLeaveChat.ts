import { useLeaveChatMutation } from '@/common/types/gql.generated';
import { useNavigation, StackActions } from '@react-navigation/native';
import { Alert } from 'react-native';

// consts
import { BOTTOM_TAB_NAME, CHAT_LIST_STACK_NAME } from 'app/constants/routes';

export const useLeaveChat = (chatId: string) => {
  const [leave] = useLeaveChatMutation({
    update: (cache) => {
      cache.evict({ id: chatId });
      cache.gc();
      navigation.dispatch(
        StackActions.replace(BOTTOM_TAB_NAME, { screen: CHAT_LIST_STACK_NAME }),
      );
    },
  });
  const navigation = useNavigation();

  return () => {
    try {
      Alert.alert('Warning', 'Do you really want to quit this chat?', [
        {
          text: 'Cancel',
          style: 'default',
        },
        {
          text: 'Leave',
          onPress: () => {
            leave({ variables: { chatId } });
          },
          style: 'destructive',
        },
      ]);
    } catch (error) {
      Alert.alert('Error', `${error}`);
    }
  };
};
