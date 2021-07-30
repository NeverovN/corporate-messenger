import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

// routers
import { AuthScreenNavigationProp } from 'auth/types/routes';

// utils
import validateEmail from '../utils/validateEmail';
import validatePassword from '../utils/validatePassword';

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

  return () =>
    navigation.navigate('UserData', {
      email: params.email,
      password: params.password,
    });
}
