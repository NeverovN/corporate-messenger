import { useEditMessageMutation } from '@/common/types/gql.generated';
import { Alert } from 'react-native';

export const useEditMessage = (
  msgText: string | null,
  msgId: string | null,
  setText: (msg: string) => void,
  setEditMsg: (msg: null) => void,
) => {
  const [editMessage] = useEditMessageMutation();
  if (!msgId) {
    return () => {
      Alert.alert('Error', 'Message not selected');
    };
  }
  return async () => {
    setText('');
    setEditMsg(null);
    try {
      await editMessage({
        variables: {
          messageId: msgId,
          newContent: msgText || '',
        },
      });
    } catch (error) {
      Alert.alert('Error', `${error}`);
    }
  };
};
