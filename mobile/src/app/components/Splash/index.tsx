import React, { FC, memo } from 'react';
import { Text } from 'react-native';

interface ISplashViewProps {}

const SPLASH_SCREEN_TITLE = 'Splash Screen';

const SplashView: FC<ISplashViewProps> = () => {
  return <Text>{SPLASH_SCREEN_TITLE}</Text>;
};

export default memo(SplashView);
