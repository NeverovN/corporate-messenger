import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

// cache
import { tokenVar } from 'common/cache/cache';

// constants
import { MAIN_STACK_NAME } from 'app/constants/routes';
import { userData } from 'common/constants/userData';

// routers
import { MainScreenNavigationProp } from 'app/types/routes';

// queries
import { useLoginMutation } from 'common/types/gql.generated';

// async storage
import { storage } from 'common/storage/index';

type UseHandleRegistrationResult = () => void;
type UseHandleLoginOptions = {
  email: string;
  password: string;
};

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

      tokenVar(data?.login.token);
      storage.addToStorage('token', data?.login.token || '');

      navigation.navigate(MAIN_STACK_NAME);
      userData.username = params.email;
      userData.password = params.password;
      return;
    } catch (err) {
      Alert.alert('Error', `${err}`);
      console.log(err);
    }
  };
  return handleLogin;
}
