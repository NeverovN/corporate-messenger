import React, { FC, memo, useEffect } from 'react';

// components
import SplashView from '@/app/components/Splash';

// hooks
import useCloseSplashScreen from '@/app/hooks/useCloseSplashScreen';

interface ISplashContainerProps {}

const SplashContainer: FC<ISplashContainerProps> = () => {
  const closeSplashScreen = useCloseSplashScreen();

  useEffect(() => {
    closeSplashScreen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <SplashView />;
};

export default memo(SplashContainer);
