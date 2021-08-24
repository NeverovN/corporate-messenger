import { useEditTitleMutation } from '@/common/types/gql.generated';
import { Alert } from 'react-native';

export const useUpdateChatTitle = (
  chatId: string,
  newTitle: string,
  oldTitle: string,
) => {
  const [editTitle] = useEditTitleMutation();

  if (!newTitle) {
    return () => Alert.alert('Error', 'Please specify chat title');
  }

  if (newTitle === oldTitle) {
    return () => null;
  }

  return () => {
    try {
      editTitle({
        variables: {
          input: {
            chatId,
            newTitle,
          },
        },
      });
    } catch (error) {
      Alert.alert('Error', `${error}`);
    }
  };
};
