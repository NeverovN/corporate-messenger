import { useNavigation } from '@react-navigation/native';

// types
import { SharedStackNavigationProp } from 'app/types/routes';

// consts
import { SHARED_STACK_NAME, SETTINGS_STACK_NAME } from 'app/constants/routes';

export const useSettingsNavigation = () => {
  const navigation = useNavigation<SharedStackNavigationProp>();
  return () => {
    navigation.navigate(SHARED_STACK_NAME, { screen: SETTINGS_STACK_NAME });
  };
};
