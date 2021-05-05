import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

// styles
import styles from './styles';

interface ISplashViewProps {}

const SPLASH_SCREEN_TITLE = 'Splash Screen';

const SplashView: FC<ISplashViewProps> = () => {
  return (
    <View style={styles.splashStyle}>
      <Text>{SPLASH_SCREEN_TITLE}</Text>
    </View>
  );
};

export default memo(SplashView);
