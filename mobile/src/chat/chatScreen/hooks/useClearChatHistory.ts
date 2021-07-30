import { useClearHistoryMutation } from '@/common/types/gql.generated';
import { Alert } from 'react-native';

export const useClearChatHistory = (chatId: string) => {
  const [clear] = useClearHistoryMutation({
    update: (cache) => {
      cache.modify({
        fields: {
          getChats() {
            try {
              cache.gc();
            } catch (err) {
              throw Error(`cache update error -> ${err}`);
            }
          },
        },
      });
    },
  });

  return () => {
    try {
      Alert.alert('Warning', 'Do you really want to clear your chat history?', [
        {
          text: 'Cancel',
          style: 'default',
        },
        {
          text: 'Delete',
          onPress: () => {
            clear({ variables: { chatId } });
            Alert.alert('Success', 'Messages were successfully deleted');
          },
          style: 'destructive',
        },
      ]);
    } catch (error) {
      Alert.alert('Error', `${error}`);
    }
  };
};
