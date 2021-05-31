import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

// cache
import { tokenVar } from 'common/cache/cache';

// constants
import { MAIN_STACK_NAME } from 'app/constants/routes';
import { userData } from 'common/constants/userData';

// routers
import { MainScreenNavigationProp } from 'app/types/routes';
import { useCreateUserMutation } from '@/common/types/gql.generated';

// async storage
import { storage } from 'common/storage/index';

// utils
import validateEmail from '../utils/validateEmail';
import validatePassword from '../utils/validatePassword';

type UseHandleRegistrationResult = () => void;
type UseHandleRegistrationOptions = {
  email: string;
  password: string;
  passwordRepeat: string;
  firstName: string;
  lastName: string;
};

export function useHandleRegistration(
  params: UseHandleRegistrationOptions,
): UseHandleRegistrationResult {
  const navigation = useNavigation<MainScreenNavigationProp>();

  const [addUser] = useCreateUserMutation();

  if (!validateEmail(params.email)) {
    return () => {
      Alert.alert('Error', 'Invalid email'); // TODO: add custom errors (e.g. dropdown alerts or toasts - https://www.npmjs.com/package/react-native-toast-message)
    };
  }

  if (!validatePassword(params.password)) {
    return () => {
      Alert.alert(
        'Error',
        `Weak password
      Password must be at least 8 characters long and contain one numeric symbol`,
      );
    };
  }

  if (params.password !== params.passwordRepeat) {
    return () => {
      Alert.alert('Error', 'Passwords not match');
    };
  }
  const handleRegistration = async () => {
    try {
      const { data } = await addUser({
        variables: {
          input: {
            email: params.email,
            password: params.password,
            firstName: params.firstName,
            lastName: params.lastName,
          },
        },
      });

      tokenVar(data?.createUser.token);
      storage.addToStorage('token', data?.createUser.token || '');

      navigation.navigate(MAIN_STACK_NAME);
      userData.username = params.email;
      userData.password = params.password;
    } catch (err) {
      console.log('rejected', `${err}`);
      Alert.alert('Error', `${err}`);
    }
  };

  return handleRegistration;
}
