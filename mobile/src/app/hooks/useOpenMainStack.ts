import { useNavigation } from '@react-navigation/native';

// constants
import { MAIN_STACK_NAME } from 'app/constants/routes';

// types
import { SplashScreenNavigationProp } from '../types/routes';

export default function useOpenMainStack() {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  return () => navigation.navigate(MAIN_STACK_NAME);
}
