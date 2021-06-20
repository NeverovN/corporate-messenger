import { Alert } from 'react-native';
import { useEditEmailMutation } from '@/common/types/gql.generated';

// utils
import validateEmail from '@/auth/utils/validateEmail';

export const useUpdateEmail = (newEmail: string) => {
  const [editEmail] = useEditEmailMutation();

  if (!validateEmail(newEmail)) {
    return () => {
      Alert.alert('Error', 'Invalid email');
    };
  }

  return async () => {
    await editEmail({ variables: { newEmail: newEmail } });
  };
};
