import { Alert } from 'react-native';
import { useEditEmailMutation } from '@/common/types/gql.generated';

// utils
import validateEmail from '@/auth/utils/validateEmail';

export const useUpdateEmail = (
  newEmail: string,
  resetField: (val: string) => void,
) => {
  const [editEmail] = useEditEmailMutation();

  if (!validateEmail(newEmail)) {
    return () => {
      Alert.alert('Error', 'Invalid email');
    };
  }

  return () => {
    editEmail({ variables: { newEmail: newEmail } });
    resetField('');
  };
};
