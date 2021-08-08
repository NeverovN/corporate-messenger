import React, { memo, FC } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

// components
import AuthInput from '../AuthInput';
import SignButton from '../SignButton';

// styles
import { useStyles } from './styles';

interface ILoginViewProps {
  email: string;
  onChangeEmail(email: string): void;

  password: string;
  onChangePassword(password: string): void;

  isHidden: boolean;

  iconName: string;
  onIconPress(): void;

  handleLogin(): void;

  handleSignUpRedirection(): void;
}

const LoginView: FC<ILoginViewProps> = (props) => {
  const styles = useStyles();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.screenStyle}
        behavior="padding"
        enabled>
        <View style={styles.screenNameWrapper}>
          <Text style={styles.screenNameStyle}>LOGIN</Text>
        </View>
        <View style={styles.loginStyle}>
          <AuthInput
            placeholder="Email"
            value={props.email}
            onChangeText={props.onChangeEmail}
          />

          <View style={styles.passwordStyle}>
            <AuthInput
              placeholder="Password"
              value={props.password}
              onChangeText={props.onChangePassword}
              secure={props.isHidden}
            />
          </View>
          <SignButton title="Submit" onPress={props.handleLogin} />
        </View>
        <View style={styles.separator} />
        <View style={styles.registerStyle}>
          <Text style={styles.textStyle}>
            Don't have an account? Create it!
          </Text>
          <SignButton title="Sign up" onPress={props.handleSignUpRedirection} />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default memo(LoginView);
