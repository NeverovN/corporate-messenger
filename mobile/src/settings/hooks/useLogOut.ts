import { useNavigation } from '@react-navigation/core';
import { StackActions } from '@react-navigation/native';

// routers
import { AuthScreenNavigationProp } from 'app/types/routes';
import { AUTH_STACK_NAME } from 'app/constants/routes';

// storage
import { storage } from 'common/storage';
import { tokenVar } from 'common/cache/cache';

// consts
import keys from 'common/constants/storageKeys';

export const useLogOut = () => {
  const navigation = useNavigation<AuthScreenNavigationProp>();

  tokenVar('');
  storage.removeFromStorage(keys.token, (error) => console.log(error));

  return () => navigation.dispatch(StackActions.replace(AUTH_STACK_NAME));
};
