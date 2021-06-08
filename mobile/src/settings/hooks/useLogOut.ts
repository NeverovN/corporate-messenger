import { useNavigation } from '@react-navigation/core';
import { StackActions } from '@react-navigation/native';
import { useApolloClient } from '@apollo/client';

// routers
import { AuthScreenNavigationProp } from 'app/types/routes';
import { AUTH_STACK_NAME } from 'app/constants/routes';

// utils
import { logOut } from 'common/utils/logOut';

export const useLogOut = () => {
  const navigation = useNavigation<AuthScreenNavigationProp>();
  const client = useApolloClient();

  logOut();

  return async () => {
    await client.clearStore();

    navigation.dispatch(StackActions.replace(AUTH_STACK_NAME));
  };
};
