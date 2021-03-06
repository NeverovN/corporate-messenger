import { useEditUserNameMutation } from '@/common/types/gql.generated';
import { Alert } from 'react-native';
import Toast from 'react-native-toast-message';

export const useUpdateUsername = (
  newFirstName: string,
  newLastName: string,
  resetFName: (val: string) => void,
  resetLName: (val: string) => void,
) => {
  const [editUsername] = useEditUserNameMutation();

  return async () => {
    try {
      await editUsername({
        variables: {
          newFirstName,
          newLastName,
        },
      });
      resetFName('');
      resetLName('');
      Toast.show({
        type: 'success',
        text1: 'Username successfully changed',
        topOffset: 50,
      });
    } catch (error) {
      Alert.alert('Error', `${error}`);
    }
  };
};
