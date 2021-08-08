import React, { memo, FC } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Text,
} from 'react-native';

// styles
import { useStyles } from './styles';

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

  handleRegistration(): void;
}

const RegisterView: FC<IRegisterScreenProps> = (props) => {
  const styles = useStyles();
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
            </View>

            <View style={styles.passwordStyle}>
              <AuthInput
                placeholder="Confirm password"
                value={props.passwordRepeat}
                onChangeText={props.onChangePasswordRepeat}
                secure={props.isHidden}
              />
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
