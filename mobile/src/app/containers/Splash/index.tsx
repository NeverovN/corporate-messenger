import React, { FC, memo, useEffect } from 'react';

// components
import SplashView from '@/app/components/Splash';

// hooks
import useCloseSplashScreen from '@/app/hooks/useCloseSplashScreen';

// TODO: remove useTestAPI
import useTestAPI from '@/app/hooks/useTestAPI';

interface ISplashContainerProps {}

const SplashContainer: FC<ISplashContainerProps> = () => {
  const a = useTestAPI();
  const closeSplashScreen = useCloseSplashScreen();

  console.log('... a ->', a);

  useEffect(() => {
    closeSplashScreen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <SplashView />;
};

export default memo(SplashContainer);
