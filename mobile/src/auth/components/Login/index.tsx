import React, { memo, FC } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

// common components
import IconButton from '@/common/components/Button/IconButton';

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

  onIconPress(callback: (val: boolean) => boolean): void;

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
            placeholder="EMAIL"
            value={props.email}
            onChangeText={props.onChangeEmail}
          />
          <View style={styles.passwordStyle}>
            <AuthInput
              placeholder="PASSWORD"
              value={props.password}
              onChangeText={props.onChangePassword}
              secure={props.isHidden}
            />
            <IconButton
              icon={props.isHidden ? 'eye-off' : 'eye'}
              onPress={() => props.onIconPress((prev) => !prev)}
              containerStyle={styles.togglePasswordIconStyle}
            />
          </View>
          <SignButton title="SUBMIT" onPress={props.handleLogin} />
        </View>
        <View style={styles.separator} />
        <View style={styles.registerStyle}>
          <Text style={styles.textStyle}>
            Don't have an account? Create it!
          </Text>
          <SignButton title="SIGN UP" onPress={props.handleSignUpRedirection} />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default memo(LoginView);
