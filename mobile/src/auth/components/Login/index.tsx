import React, { memo, FC } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

// components
import AuthInput from '../AuthInput';
import SignButton from '../SignButton';

// styles
import styles from './styles';

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
  return (
    <KeyboardAvoidingView style={styles.touchStyle} behavior="padding" enabled>
      <TouchableWithoutFeedback
        style={styles.touchStyle}
        onPress={() => Keyboard.dismiss()}>
        <>
          <View style={styles.loginStyle}>
            <AuthInput
              placeholder="enter your login"
              value={props.email}
              onChangeText={props.onChangeEmail}
            />
            <View style={styles.passwordStyle}>
              <AuthInput
                placeholder="enter your password"
                value={props.password}
                onChangeText={props.onChangePassword}
                secure={props.isHidden}
              />
              <Icon
                name={props.iconName}
                size={25}
                onPress={props.onIconPress}
              />
            </View>
          </View>
          <View style={styles.authButtons}>
            <SignButton title="SIGN IN" onPress={props.handleLogin} />
            <SignButton
              title="SIGN UP"
              onPress={props.handleSignUpRedirection}
            />
          </View>
        </>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default memo(LoginView);
