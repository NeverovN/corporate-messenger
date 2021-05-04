import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

// constants
import { REGISTER_SCREEN_NAME } from '../constants/routes';

// routers
import { LoginScreenNavigationProp } from '../routers/index';

type UseHandleLoginResult = () => Promise<void>;
type UseHandleLoginOptions = {};

export function useHandleSignUpRedirection(
  params: UseHandleLoginOptions,
): UseHandleLoginResult {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleSignUpRedirection = async () => {
    navigation.navigate(REGISTER_SCREEN_NAME);
  };

  return handleSignUpRedirection;
}
