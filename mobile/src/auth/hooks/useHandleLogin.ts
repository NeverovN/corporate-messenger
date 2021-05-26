import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

// constants
import { MAIN_STACK_NAME } from 'app/constants/routes';
import { userData } from 'common/constants/userData';

// routers
import { MainScreenNavigationProp } from 'app/types/routes';

import { useGetUserTokenQuery } from 'common/types/gql.generated';

type UseHandleRegistrationResult = () => void;
type UseHandleLoginOptions = {
  email: string;
  password: string;
};

export function useHandleLogin(
  params: UseHandleLoginOptions,
): UseHandleRegistrationResult {
  const navigation = useNavigation<MainScreenNavigationProp>();
  const { data, loading, error } = useGetUserTokenQuery({
    variables: { username: params.email, password: params.password },
  });

  if (loading) {
    return () => {
      console.log('loading');
    };
  } else if (error) {
    console.log(error);
    return () => {
      Alert.alert('Error', 'db response error');
    };
  }

  const handleLogin = async () => {
    if (data?.getUserToken === null) {
      Alert.alert('Error', 'Wrong user data');
      return;
    }
    // sends some info on server to give user access to their account
    navigation.navigate(MAIN_STACK_NAME);
    userData.username = params.email;
    userData.password = params.password;
  };

  return handleLogin;
}
