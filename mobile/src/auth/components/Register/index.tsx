import React, { memo, FC } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Text,
} from 'react-native';

// styles
import styles from './styles';

// consts
// import COLORS from '@/common/constants/colors';

// // types
// import { IconType } from '@/common/types/styles';

// // common components
// import IconButton from '@/common/components/Button/IconButton';

// components
import AuthInput from '../AuthInput';
import SignButton from '../SignButton';

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
        style={styles.screenStyle}
        behavior="padding"
        enabled>
        <View style={styles.screenWrapperStyle}>
          <View style={styles.screenNameWrapper}>
            <Text style={styles.screenNameStyle}>SIGN UP</Text>
          </View>
          <View style={styles.inputAreaStyle}>
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
              {/* <IconButton
                icon={props.iconName}
                iconColor={COLORS.white}
                iconType={IconType.LARGE}
                onPress={props.onIconPress}
                containerStyle={styles.iconStyle}
              /> */}
            </View>

            <View style={styles.passwordStyle}>
              <AuthInput
                placeholder="Confirm password"
                value={props.passwordRepeat}
                onChangeText={props.onChangePasswordRepeat}
                secure={props.isHidden}
              />
              {/* <IconButton
                icon={props.iconName}
                iconColor={COLORS.white}
                iconType={IconType.LARGE}
                onPress={props.onIconPress}
                containerStyle={styles.iconStyle}
              /> */}
            </View>
            <View style={styles.buttonWrapperStyle}>
              <SignButton title="Continue" onPress={props.handleRegistration} />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default memo(RegisterView);
