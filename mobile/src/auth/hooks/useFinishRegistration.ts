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
  PROFILE_STACK_NAME,
  MAIN_STACK_NAME,
} from '@/app/constants/routes';
import { PROFILE_SCREEN_NAME } from '@/profile/constants/routes';
import Toast from 'react-native-toast-message';

export const useFinishRegistration = (fName: string, lName: string) => {
  const navigation = useNavigation<MainScreenNavigationProp>();
  const { params } = useRoute<UserDataRouteProp>();
  const [addUser] = useCreateUserMutation();
  const normalizedFName = fName.replace(/\s+/g, ' ').trim();
  const normalizedLName = lName.replace(/\s+/g, ' ').trim();

  if (!fName && !lName) {
    return () => {
      Toast.show({
        type: 'error',
        text1: 'Please, enter your new name and surname',
        topOffset: 50,
      });
    };
  }

  if (!fName) {
    return () => {
      Toast.show({
        type: 'error',
        text1: 'Please, enter your name',
        topOffset: 50,
      });
    };
  }

  if (!lName) {
    return () => {
      Toast.show({
        type: 'error',
        text1: 'Please, enter your surname',
        topOffset: 50,
      });
    };
  }

  if (!normalizedFName) {
    return () => {
      Toast.show({
        type: 'error',
        text1: 'Invalid name',
        text2: "Please, don't use spaces as your name",
        topOffset: 50,
      });
    };
  }

  if (!normalizedLName) {
    return () => {
      Toast.show({
        type: 'error',
        text1: 'Invalid name',
        text2: "Please, don't use spaces as your surname",
        topOffset: 50,
      });
    };
  }

  const handleFinish = async () => {
    try {
      const { data } = await addUser({
        variables: {
          input: {
            email: params.email,
            password: params.password,
            firstName: normalizedFName,
            lastName: normalizedLName,
          },
        },
      });

      setToken(data?.createUser.token || '');

      navigation.navigate(MAIN_STACK_NAME, {
        screen: BOTTOM_TAB_NAME,
        params: {
          screen: PROFILE_STACK_NAME,
          params: {
            screen: PROFILE_SCREEN_NAME,
          },
        },
      });
    } catch (error) {
      Alert.alert('Error', `${error}`);
    }
  };
  return handleFinish;
};
