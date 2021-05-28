import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

// cache
import { tokenVar } from 'common/cache/cache';

// constants
import { MAIN_STACK_NAME } from 'app/constants/routes';
import { userData } from 'common/constants/userData';

// routers
import { MainScreenNavigationProp } from 'app/types/routes';
import { useCreateUserMutation } from '@/common/types/gql.generated';

type UseHandleRegistrationResult = () => void;
type UseHandleRegistrationOptions = {
  email: string;
  password: string;
  passwordRepeat: string;
  firstName: string;
  lastName: string;
};

export function useHandleRegistration(
  params: UseHandleRegistrationOptions,
): UseHandleRegistrationResult {
  const navigation = useNavigation<MainScreenNavigationProp>();

  const [addUser] = useCreateUserMutation();

  if (!validateEmail(params.email)) {
    return () => {
      Alert.alert('Error', 'Invalid email');
    };
  }

  if (!validatePassword(params.password)) {
    return () => {
      Alert.alert(
        'Error',
        `Weak password
      Password must be at least 8 characters long and contain one numeric symbol`,
      );
    };
  }

  if (!validateMatch(params.password, params.passwordRepeat)) {
    return () => {
      Alert.alert('Error', 'Passwords not match');
    };
  }
  const handleRegistration = async () => {
    try {
      const { data } = await addUser({
        variables: {
          input: {
            email: params.email,
            password: params.password,
            firstName: params.firstName,
            lastName: params.lastName,
          },
        },
      });

      tokenVar(data?.createUser.token);

      navigation.navigate(MAIN_STACK_NAME);
      userData.username = params.email;
      userData.password = params.password;
    } catch (err) {
      console.log('rejected', `${err}`);
      Alert.alert('Error', `${err}`);
    }
  };

  return handleRegistration;
}

const validateEmail = (email: string) =>
  email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );

const validatePassword = (password: string) =>
  password.match(/^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/);

const validateMatch = (password: string, repeat: string) =>
  password.match(repeat);
