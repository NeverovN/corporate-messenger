import React, { memo, FC } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

// styles
import styles from './styles';

// consts
import COLORS from '@/common/constants/colors';

// types
import { IconType } from '@/common/types/styles';

// common components
import IconButton from '@/common/components/Button/IconButton';

// components
import AuthInput from '../AuthInput';
import SignButton from '../SignButton';

// containers
import Logo from '@/auth/containers/Logo';

interface IRegisterScreenProps {
  email: string;
  onChangeEmail(email: string): void;

  password: string;
  onChangePassword(password: string): void;

  passwordRepeat: string;
  onChangePasswordRepeat(password: string): void;

  isHidden: boolean;

  iconName: string;
  onIconPress(): void;

  firstName: string;
  onChangeFirstName(firstName: string): void;

  lastName: string;
  onChangeLastName(lastName: string): void;

  handleRegistration(): void;
}

const RegisterView: FC<IRegisterScreenProps> = (props) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.touchStyle}
        behavior="padding"
        enabled>
        <Logo />

        <View style={styles.registerStyle}>
          <View style={styles.inputAreaStyle}>
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
                placeholder="enter your First Name"
                value={props.firstName}
                onChangeText={props.onChangeFirstName}
              />
            </View>

            <View style={styles.separatorStyle} />

            <View style={styles.passwordStyle}>
              <AuthInput
                placeholder="enter your Last Name"
                value={props.lastName}
                onChangeText={props.onChangeLastName}
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

            <View style={styles.separatorStyle} />

            <View style={styles.passwordStyle}>
              <AuthInput
                placeholder="confirm your password"
                value={props.passwordRepeat}
                onChangeText={props.onChangePasswordRepeat}
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
            <SignButton title="SIGN UP" onPress={props.handleRegistration} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default memo(RegisterView);
