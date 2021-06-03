// hooks
import useOpenAuthStack from './useOpenAuthStack';
import { isLoggedIn } from '@/auth/utils/isLoggedIn';
import useOpenMainStack from './useOpenMainStack';

export default function useCloseSplashScreen() {
  const openAuthStack = useOpenAuthStack();
  const openMainStack = useOpenMainStack();

  const closeSplashScreen = async () => {
    const isUserAlreadyLoggedIn = await isLoggedIn();

    if (isUserAlreadyLoggedIn) {
      return openMainStack();
    }

    return openAuthStack();
  };

  return closeSplashScreen;
}
