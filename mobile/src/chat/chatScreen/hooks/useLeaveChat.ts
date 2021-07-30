import { useLeaveChatMutation } from '@/common/types/gql.generated';
import { useNavigation, StackActions } from '@react-navigation/native';
import { Alert } from 'react-native';

// consts
import { BOTTOM_TAB_NAME } from 'app/constants/routes';

export const useLeaveChat = (chatId: string) => {
  const [leave] = useLeaveChatMutation({
    update: (cache) => {
      cache.modify({
        fields: {
          GetChats() {
            // does not work properly
            cache.gc();
            navigation.dispatch(StackActions.replace(BOTTOM_TAB_NAME));
          },
        },
      });
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
