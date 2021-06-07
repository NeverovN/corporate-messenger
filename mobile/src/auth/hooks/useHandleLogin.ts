import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

// constants
import {
  BOTTOM_TAB_NAME,
  FEED_STACK_NAME,
  MAIN_STACK_NAME,
} from 'app/constants/routes';

// routers
import { MainScreenNavigationProp } from 'app/types/routes';

// queries
import { useGetPostsQuery, useLoginMutation } from 'common/types/gql.generated';

// utils
import { setToken } from 'auth/utils/setToken';
import { ALL_FEED_SCREEN_NAME, FEED_SCREEN_NAME } from 'feed/constants/routes';

type UseHandleRegistrationResult = () => void;
type UseHandleLoginOptions = {
  email: string;
  password: string;
};

//TODO: apply validation too (as for sign up)

export function useHandleLogin(
  params: UseHandleLoginOptions,
): UseHandleRegistrationResult {
  const navigation = useNavigation<MainScreenNavigationProp>();
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
