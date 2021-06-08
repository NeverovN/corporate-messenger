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

// queries
import { useLoginMutation } from 'common/types/gql.generated';

// utils
import { setToken } from 'auth/utils/setToken';

type UseHandleRegistrationResult = () => void;
type UseHandleLoginOptions = {
  email: string;
  password: string;
};

//TODO: apply validation too (as for sign up)

export function useHandleLogin(
  params: UseHandleLoginOptions,
): UseHandleRegistrationResult {
  const navigation = useNavigation<MainScreenNavigationProp>(); // now noticed it breaks since I implement additional types in app routes
  const [login] = useLoginMutation();

  const handleLogin = async () => {
    try {
      const { data } = await login({
        variables: {
          input: {
            email: params.email,
            password: params.password,
          },
        },
      });
      if (!data || !data.login) {
        throw Error('bad server response or invalid request');
      }

      setToken(data.login.token || '');

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
      return;
    } catch (err) {
      Alert.alert('Error', `${err}`);
      console.log(err);
    }
  };
  return handleLogin;
}
