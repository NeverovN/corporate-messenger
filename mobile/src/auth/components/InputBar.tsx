import React, { memo } from 'react';
import { View } from 'react-native';
import Input from './Input';
import styles from './styles';
import SignInButton from './SignInButton';

interface IAuthenticationSignInProps {
  navigation: StackNavigationProp<MainStackParamsList, MAIN_STACK.MAIN_SCREEN>;
  route: any;
}

const InputBar: React.FC<AuthenticaionSignIn> = memo((props) => {
  function onSignInHandler(e: React.MouseEvent<HTMLButtonElement>) {
    props.navigation;
  }

  return (
    <View>
      <Input styles={styles} />
      <Input styles={styles} />
      <SignInButton
        title="Sign In"
        textStyle={styles.textStyle}
        viewStyle={styles.viewStyle}
        onPress={onSignInHandler}
      />
    </View>
  );
});

export default InputBar;
