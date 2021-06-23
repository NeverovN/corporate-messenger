import { useNavigation } from '@react-navigation/core';

// types
import { AccountSettingsScreenNavigationProp } from '@/settings/types/routes';

// routers
import { ACCOUNT_STACK_NAME } from 'settings/constants/routes';

export const useHandleAccountSettingsNavigation = () => {
  const navigation = useNavigation<AccountSettingsScreenNavigationProp>();
  return () => navigation.navigate(ACCOUNT_STACK_NAME);
};
