import { useEditPasswordMutation } from '@/common/types/gql.generated';
import { Alert } from 'react-native';

// utils
import validatePassword from '@/auth/utils/validatePassword';

export const useUpdatePassword = (
  oldPassword: string,
  newPassword: string,
  newPasswordRep: string,
) => {
  const [editPassword] = useEditPasswordMutation();

  if (!validatePassword(newPassword)) {
    return () => {
      Alert.alert(
        'Error',
        `Weak password
      Password must be at least 8 characters long and contain one numeric symbol`,
      );
    };
  }

  if (newPassword !== newPasswordRep) {
    return () => {
      Alert.alert('Error', 'Passwords not match');
    };
  }

  return async () => {
    await editPassword({
      variables: {
        input: {
          oldPassword,
          newPassword,
        },
      },
    });
  };
};
