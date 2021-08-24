// hooks
import useOpenAuthStack from './useOpenAuthStack';
import { isLoggedIn } from '@/auth/utils/isLoggedIn';
import useOpenMainStack from './useOpenMainStack';
import { getColorScheme } from '@/common/utils/getRemoteColorScheme';
import { theme } from '@/common/cache/cache';
import { useDispatch } from 'react-redux';
import { set } from 'common/redux/reducers/currentTheme';

export default function useCloseSplashScreen() {
  const openAuthStack = useOpenAuthStack();
  const openMainStack = useOpenMainStack();
  const dispatch = useDispatch();

  const closeSplashScreen = async () => {
    const isUserAlreadyLoggedIn = await isLoggedIn();
    if (isUserAlreadyLoggedIn) {
      theme(await getColorScheme());
      dispatch(set(await getColorScheme()));
      return openMainStack();
    }

    return openAuthStack();
  };

  return closeSplashScreen;
}
