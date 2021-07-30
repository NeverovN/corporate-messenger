import { useNavigation, useRoute } from '@react-navigation/native';
import { useCreateUserMutation } from '@/common/types/gql.generated';
import { Alert } from 'react-native';

// routers
import { MainScreenNavigationProp } from 'app/types/routes';
import { UserDataRouteProp } from 'auth/types/routes';

// utils
import { setToken } from '../utils/setToken';

// consts
import {
  BOTTOM_TAB_NAME,
  FEED_STACK_NAME,
  MAIN_STACK_NAME,
} from '@/app/constants/routes';
import {
  ALL_FEED_SCREEN_NAME,
  FEED_SCREEN_NAME,
} from '@/feed/constants/routes';

export const useFinishRegistration = (fName: string, lName: string) => {
  const navigation = useNavigation<MainScreenNavigationProp>();
  const { params } = useRoute<UserDataRouteProp>();
  const [addUser] = useCreateUserMutation();

  if (!fName || !lName) {
    return () => {
      Alert.alert('Error', 'Please, enter correct name');
    };
  }

  const handleFinish = async () => {
    try {
      const { data } = await addUser({
        variables: {
          input: {
            email: params.email,
            password: params.password,
            firstName: fName,
            lastName: lName,
          },
        },
      });

      setToken(data?.createUser.token || '');

      navigation.navigate(MAIN_STACK_NAME, {
        screen: BOTTOM_TAB_NAME,
        params: {
          screen: FEED_STACK_NAME,
          params: {
            screen: FEED_SCREEN_NAME,
            params: { screen: ALL_FEED_SCREEN_NAME },
          },
        },
      });
    } catch (error) {
      Alert.alert('Error', `${error}`);
    }
  };
  return handleFinish;
};
