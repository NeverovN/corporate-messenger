import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

// constants
import { MAIN_STACK_NAME } from 'app/constants/routes';

// routers
import { MainScreenNavigationProp } from 'app/types/routes';
import {
  useAddUserMutation,
  useGetUsersQuery,
} from '@/common/types/gql.generated';

type UseHandleRegistrationResult = () => void;
type UseHandleRegistrationOptions = {
  email: string;
  password: string;
  passwordRepeat: string;
};

export function useHandleRegistration(
  params: UseHandleRegistrationOptions,
): UseHandleRegistrationResult {
  const navigation = useNavigation<MainScreenNavigationProp>();

  const { data, loading, error } = useGetUsersQuery();
  const [addUser] = useAddUserMutation({
    variables: {
      username: params.email,
      password: params.password,
    },
  });

  console.log(
    'data.getUsers: ',
    data?.getUsers?.find((user) => user?.username === params.email),
  );

  if (loading) {
    return () => {
      console.log('loading');
    };
  } else if (error) {
    console.log(error);
    return () => Alert.alert('Error', 'db response error');
  } else if (data?.getUsers?.find((user) => user?.username === params.email)) {
    return () => {
      Alert.alert('Error', 'User with such username already exists');
    };
  }

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
      await addUser({
        variables: {
          username: params.email,
          password: params.password,
        },
      });
    } catch (err) {
      console.log('rejected', err);
      Alert.alert('Error', 'Error while creating new user. Try again');
    }
    navigation.navigate(MAIN_STACK_NAME);
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
