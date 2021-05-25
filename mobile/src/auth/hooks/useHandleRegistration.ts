import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

// constants
import { MAIN_STACK_NAME } from 'app/constants/routes';
import { userData } from 'common/constants/userData';

// routers
import { MainScreenNavigationProp } from 'app/types/routes';

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

  const navigation = useNavigation<MainScreenNavigationProp>();

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
    navigation.navigate(MAIN_STACK_NAME);
    userData.username = params.email;
    userData.password = params.password;
  };

  return handleRegistration;
}
