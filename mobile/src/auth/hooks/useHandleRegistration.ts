import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

// constants
import { APP_SCREEN_NAME } from '../../app/constants/routes';

// routers
import { AuthNavigationProp } from '../../app/routers/index';

type UseHandleRegistrationResult = () => Promise<void>;
type UseHandleRegistrationOptions = {
  email: string;
  password: string;
  passwordRepeat: string;
};

export function useHandleRegistration(
  params: UseHandleRegistrationOptions,
): UseHandleRegistrationResult {
  const registrationHandler = async (
    _email: string,
    _password: string,
    _passwordRepeat: string,
  ) => {
    return true;
  }; // api
  const navigation = useNavigation<AuthNavigationProp>();

  const handleRegistration = async () => {
    try {
      await registrationHandler(
        params.email,
        params.password,
        params.passwordRepeat,
      );
    } catch {
      Alert.alert('ERROR', 'Error occured'); // just for now
    }

    // sends some info on server to give user access to their account
    navigation.navigate(APP_SCREEN_NAME); 
  };

  return handleRegistration;
}
