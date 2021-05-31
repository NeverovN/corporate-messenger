// hooks
import useOpenAuthStack from './useOpenAuthStack';
import { isLoggedIn } from '@/app/utils/isLoggedIn';
import useOpenMainStack from './useOpenMainStack';

//TODO: remove
// const fakePromise = (timeout: number) =>
//   new Promise((r) => setTimeout(r, timeout));

//TODO: implement real function
// async function isLoggedIn() {
//   await fakePromise(3000);

//   return true; //* you can change it while mocking UI to imitate real value
// }

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
