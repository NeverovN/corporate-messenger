import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

// cache
import { tokenVar } from 'common/cache/cache';

// constants
import { MAIN_STACK_NAME } from 'app/constants/routes';

// routers
import { MainScreenNavigationProp } from 'app/types/routes';

// queries
import { useLoginMutation } from 'common/types/gql.generated';

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
        // covered in another pr
        throw Error('server responce error');
      }

      tokenVar(data?.login.token);

      navigation.navigate(MAIN_STACK_NAME);
      return;
    } catch (err) {
      Alert.alert('Error', `${err}`);
      console.log(err);
    }
  };
  return handleLogin;
}
