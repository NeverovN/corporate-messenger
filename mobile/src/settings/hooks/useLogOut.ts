import { useNavigation } from '@react-navigation/core';
import { StackActions } from '@react-navigation/native';

// routers
import { AuthScreenNavigationProp } from 'app/types/routes';
import { AUTH_STACK_NAME } from 'app/constants/routes';

import { logOut } from 'common/utils/logOut';

export const useLogOut = () => {
  const navigation = useNavigation<AuthScreenNavigationProp>();
  logOut();

  return () => navigation.dispatch(StackActions.replace(AUTH_STACK_NAME));
};
