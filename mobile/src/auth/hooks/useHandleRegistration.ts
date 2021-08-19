import { useNavigation } from '@react-navigation/native';

// routers
import { AuthScreenNavigationProp } from 'auth/types/routes';

// utils
import validateEmail from '../utils/validateEmail';
import validatePassword from '../utils/validatePassword';
import Toast from 'react-native-toast-message';

type UseHandleRegistrationResult = () => void;
type UseHandleRegistrationOptions = {
  email: string;
  password: string;
  passwordRepeat: string;
};

export function useHandleRegistration(
  params: UseHandleRegistrationOptions,
): UseHandleRegistrationResult {
  const navigation = useNavigation<AuthScreenNavigationProp>(); // same as login

  if (!validateEmail(params.email)) {
    return () => {
      Toast.show({
        type: 'error',
        text1: 'Invalid email',
        text2: 'Please, enter correct email',
        topOffset: 50,
      });
    };
  }

  if (params.password.replace(/\s+/g, '').trim() !== params.password) {
    return () => {
      Toast.show({
        type: 'error',
        text1: 'Invalid password',
        text2: "Please, don't use any spaces in password",
        topOffset: 50,
      });
    };
  }

  if (!validatePassword(params.password)) {
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

  if (params.password !== params.passwordRepeat) {
    return () => {
      Toast.show({
        type: 'error',
        text1: 'Passwords not match',
        text2: 'Please, check provided data',
        topOffset: 50,
      });
    };
  }

  return () =>
    navigation.navigate('UserData', {
      email: params.email,
      password: params.password,
    });
}
