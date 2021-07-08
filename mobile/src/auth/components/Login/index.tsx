import React, { memo, FC } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

// common components
import IconButton from '@/common/components/Button/IconButton';

// consts
import COLORS from '@/common/constants/colors';

// types
import { IconType } from '@/common/types/styles';

// components
import AuthInput from '../AuthInput';
import SignButton from '../SignButton';

// containers
import Logo from 'auth/containers/Logo';

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
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.touchStyle}
        behavior="padding"
        enabled>
        <>
          <Logo />

          <View style={styles.inputAreaStyles}>
            <View style={styles.loginStyle}>
              <View style={styles.passwordStyle}>
                <AuthInput
                  placeholder="enter your login"
                  value={props.email}
                  onChangeText={props.onChangeEmail}
                />
              </View>
              <View style={styles.separatorStyle} />
              <View style={styles.passwordStyle}>
                <AuthInput
                  placeholder="enter your password"
                  value={props.password}
                  onChangeText={props.onChangePassword}
                  secure={props.isHidden}
                />
                <IconButton
                  icon={props.iconName}
                  iconColor={COLORS.white}
                  iconType={IconType.LARGE}
                  onPress={props.onIconPress}
                  containerStyle={styles.iconStyle}
                />
              </View>
            </View>
            <View style={styles.wrapperStyle}>
              <SignButton title="SIGN IN" onPress={props.handleLogin} />
              <SignButton
                title="SIGN UP"
                onPress={props.handleSignUpRedirection}
              />
            </View>
          </View>
        </>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default memo(LoginView);
