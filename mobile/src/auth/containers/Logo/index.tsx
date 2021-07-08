import React, { FC, memo, useEffect, useMemo, useState } from 'react';
import { Keyboard, Animated } from 'react-native';

// styles
import styles from './styles';

interface ILogoContainerProps {}

const LogoContainer: FC<ILogoContainerProps> = () => {
  const [, setIsKeyboardShown] = useState<boolean>(false);
  const startValue = useMemo(() => new Animated.Value(2), []);
  const endMinValue = 1;
  const endMaxValue = 2;
  const duration = 1000;

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardShown(true);
        Animated.timing(startValue, {
          toValue: endMinValue,
          duration: duration,
          useNativeDriver: true,
        }).start();
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardShown(false);
        Animated.timing(startValue, {
          toValue: endMaxValue,
          duration: duration,
          useNativeDriver: true,
        }).start();
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, [startValue]);

  return (
    <Animated.Image
      source={require('common/assets/images/package.png')}
      style={[styles.logoStyle, { transform: [{ scale: startValue }] }]}
    />
  );
};

export default memo(LogoContainer);
