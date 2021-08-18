import { useEditEmailMutation } from '@/common/types/gql.generated';

// utils
import validateEmail from '@/auth/utils/validateEmail';
import Toast from 'react-native-toast-message';

export const useUpdateEmail = (
  newEmail: string,
  resetField: (val: string) => void,
) => {
  const [editEmail] = useEditEmailMutation();

  if (!validateEmail(newEmail)) {
    return () => {
      Toast.show({
        type: 'error',
        text1: 'Invalid email',
        text2: 'Please, enter correct data',
        topOffset: 50,
      });
    };
  }

  return async () => {
    try {
      await editEmail({ variables: { newEmail: newEmail } });
      resetField('');
      Toast.show({
        type: 'success',
        text1: 'Email successfully changed',
        topOffset: 50,
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Server error occurred',
        text2: `${error}`,
        topOffset: 50,
      });
    }
  };
};
