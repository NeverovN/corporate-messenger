import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

// constants
import { APP_SCREEN_NAME } from '../../app/constants/routes';

// routers
import { AuthNavigationProp } from '../../app/routers/index';

type UseHandleRegistrationResult = () => Promise<void>;
type UseHandleLoginOptions = {
  email: string;
  password: string;
};

export function useHandleLogin(
  params: UseHandleLoginOptions,
): UseHandleRegistrationResult {
  const loginHandler = async (
    _email: string,
    _password: string,
  ) => {
    return true;
  }; // api
  const navigation = useNavigation<AuthNavigationProp>();

  const handleLogin = async () => {
    try {
      await loginHandler(
        params.email,
        params.password,
      );
    } catch {
      Alert.alert('ERROR', 'Error occured'); // just for now
    }

    // sends some info on server to give user access to their account
    navigation.navigate(APP_SCREEN_NAME); 
  };

  return handleLogin;
}
