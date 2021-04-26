import React from 'react';
import { View } from 'react-native';
import Input from './Input';
import SignInButton from './SignInButton';
import styles from '../constants/styles';
import { AuthProps } from '../routers/index';

const Auth = ({ navigation }: AuthProps) => {
  function handleNavigation() {
    navigation.navigate('Feed');
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Input styles={styles.input} />
      <Input styles={styles.input} />
      <SignInButton
        viewStyle={styles.viewStyle}
        textStyle={styles.textStyle}
        onPress={handleNavigation}
        title="AAA"
      />
    </View>
  );
};

export default Auth;
