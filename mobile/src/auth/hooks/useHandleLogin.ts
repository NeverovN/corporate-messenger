import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

// constants
import { REGISTER_SCREEN_NAME } from '../constants/routes';

// routers
import { LoginScreenNavigationProp } from '../routers/index';

type UseHandleLoginResult = () => Promise<void>;
type UseHandleLoginOptions = { email: string; password: string };

export function useHandleLogin(
  params: UseHandleLoginOptions,
): UseHandleLoginResult {
  const loginHandler = async (_email: string, _password: string) => {
    return true;
  }; // api
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = async () => {
    try {
      await loginHandler(params.email, params.password);
    } catch {
      Alert.alert('ERROR', 'Error occured'); // just for now
    }
    // sends some info on server to give user access to their account
    navigation.navigate(REGISTER_SCREEN_NAME);
  };

  return handleLogin;
}

// type UseHandleLoginResult = (email: string, password: string) => Promise<void>;
// // type UseHandleLoginOptions = {};

// export function useHandleLogin(): UseHandleLoginResult {
//   const loginHandler = async (_email: string, _password: string) => {}; // api

//   const handleLogin = async (email: string, password: string) => {
//     try {
//       await loginHandler(email, password);
//     } catch {
//       // TODO: handle error
//     }
//   };

//   return handleLogin;
// }
