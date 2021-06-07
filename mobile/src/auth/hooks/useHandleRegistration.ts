import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

// constants
import {
  BOTTOM_TAB_NAME,
  FEED_STACK_NAME,
  MAIN_STACK_NAME,
} from 'app/constants/routes';
import { ALL_FEED_SCREEN_NAME, FEED_SCREEN_NAME } from 'feed/constants/routes';

// routers
import { MainScreenNavigationProp } from 'app/types/routes';
import { useCreateUserMutation } from '@/common/types/gql.generated';

// utils
import validateEmail from '../utils/validateEmail';
import validatePassword from '../utils/validatePassword';
import { setToken } from '../utils/setToken';

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
  const navigation = useNavigation<MainScreenNavigationProp>(); // same as login

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

      setToken(data?.createUser.token || '');

      navigation.navigate(MAIN_STACK_NAME, {
        // so dumb omg
        screen: BOTTOM_TAB_NAME,
        params: {
          screen: FEED_STACK_NAME,
          params: {
            screen: FEED_SCREEN_NAME,
            params: { screen: ALL_FEED_SCREEN_NAME },
          },
        },
      });
    } catch (err) {
      console.log('rejected', `${err}`);
      Alert.alert('Error', `${err}`);
    }
  };

  return handleRegistration;
}
