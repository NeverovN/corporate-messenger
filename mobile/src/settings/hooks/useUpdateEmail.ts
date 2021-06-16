import { Alert } from 'react-native';
import {
  useEditEmailMutation,
  useGetUserQuery,
} from '@/common/types/gql.generated';

// utils
import validateEmail from '@/auth/utils/validateEmail';

export const useUpdateEmail = (newEmail: string) => {
  const [editEmail] = useEditEmailMutation();
  const { data } = useGetUserQuery();

  if (!validateEmail(newEmail)) {
    return () => {
      Alert.alert('Error', 'Invalid email');
    };
  }

  return () => {
    try {
      if (data && data.getUser) {
        if (data.getUser.email === newEmail) {
          console.log('email is the same');
          return;
        }
      }
      editEmail({ variables: { newEmail: newEmail } });
    } catch (err) {
      console.log(err);
    }
  };
};
