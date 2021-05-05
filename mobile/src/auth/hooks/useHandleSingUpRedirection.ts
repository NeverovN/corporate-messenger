import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

// constants
import { REGISTER_SCREEN_NAME } from 'auth/constants/routes';

// routers
import { AuthScreenNavigationProp } from 'auth/types/routes';

type UseHandleLoginResult = () => Promise<void>;
type UseHandleLoginOptions = {};

export function useHandleSignUpRedirection(
  params: UseHandleLoginOptions,
): UseHandleLoginResult {
  const navigation = useNavigation<AuthScreenNavigationProp>();

  const handleSignUpRedirection = async () => {
    navigation.navigate(REGISTER_SCREEN_NAME);
  };

  return handleSignUpRedirection;
}
