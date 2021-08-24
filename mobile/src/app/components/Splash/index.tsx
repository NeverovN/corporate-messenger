import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

// styles
import { useStyles } from './styles';

interface ISplashViewProps {}

const SPLASH_SCREEN_TITLE = 'Corporate\nMessenger';

const SplashView: FC<ISplashViewProps> = () => {
  const styles = useStyles();
  return (
    <View style={styles.splashStyle}>
      <Text style={styles.textStyle}>{SPLASH_SCREEN_TITLE}</Text>
    </View>
  );
};

export default memo(SplashView);
