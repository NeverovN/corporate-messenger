import { useNavigation } from '@react-navigation/native';

// constants
import { REGISTER_SCREEN_NAME } from 'auth/constants/routes';

// routers
import { AuthScreenNavigationProp } from 'auth/types/routes';

type UseHandleLoginResult = () => void;

export function useHandleSignUpRedirection(): UseHandleLoginResult {
  const navigation = useNavigation<AuthScreenNavigationProp>();

  const handleSignUpRedirection = () => {
    navigation.navigate(REGISTER_SCREEN_NAME);
  };

  return handleSignUpRedirection;
}
