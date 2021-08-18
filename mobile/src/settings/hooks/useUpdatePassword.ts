import { Alert } from 'react-native';
import Toast from 'react-native-toast-message';

import { useEditPasswordMutation } from '@/common/types/gql.generated';

// utils
import validatePassword from '@/auth/utils/validatePassword';

export const useUpdatePassword = (
  oldPassword: string,
  newPassword: string,
  newPasswordRep: string,
  resetOld: (val: string) => void,
  resetNew: (val: string) => void,
  resetRep: (val: string) => void,
) => {
  const [editPassword] = useEditPasswordMutation();

  if (!validatePassword(newPassword)) {
    return () => {
      Toast.show({
        type: 'error',
        text1: 'Weak password',
        text2:
          'Password must be at least 8 characters long and contain one numeric symbol',
        topOffset: 50,
      });
    };
  }

  if (newPassword !== newPasswordRep) {
    return () => {
      Toast.show({
        type: 'error',
        text1: 'Passwords not match!',
        text2: 'Please, try again',
        topOffset: 50,
      });
    };
  }

  return async () => {
    try {
      await editPassword({
        variables: {
          input: {
            oldPassword,
            newPassword,
          },
        },
      });
      resetOld('');
      resetNew('');
      resetRep('');
      Toast.show({
        type: 'success',
        text1: 'Password successfully changed',
        topOffset: 50,
      });
    } catch (error) {
      Alert.alert('Error', `${error}`);
    }
  };
};
