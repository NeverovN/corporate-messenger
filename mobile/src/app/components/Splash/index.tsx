import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

// styles
import { useStyles } from './styles';

interface ISplashViewProps {}

const SPLASH_SCREEN_TITLE = 'Splash Screen';

const SplashView: FC<ISplashViewProps> = () => {
  const styles = useStyles();
  return (
    <View style={styles.splashStyle}>
      <Text>{SPLASH_SCREEN_TITLE}</Text>
    </View>
  );
};

export default memo(SplashView);
