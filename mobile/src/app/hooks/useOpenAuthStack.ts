import { useNavigation } from '@react-navigation/native';

// constants
import { AUTH_STACK_NAME } from 'app/constants/routes';

// types
import { SplashScreenNavigationProp } from '../types/routes';

export default function useOpenAuthStack() {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  return () => navigation.navigate(AUTH_STACK_NAME);
}
