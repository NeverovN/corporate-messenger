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

// common components
import IconButton from '@/common/components/Button/IconButton';

interface IRegisterScreenProps {
  email: string;
  onChangeEmail(email: string): void;

  password: string;
  onChangePassword(password: string): void;

  passwordRepeat: string;
  onChangePasswordRepeat(password: string): void;

  isHidden: boolean;
  isHiddenRep: boolean;

  onIconPress(callback: (val: boolean) => boolean): void;
  onIconRepPress(callback: (val: boolean) => boolean): void;

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

            <View style={styles.passwordStyle}>
              <AuthInput
                placeholder="CONFIRM PASSWORD"
                value={props.passwordRepeat}
                onChangeText={props.onChangePasswordRepeat}
                secure={props.isHiddenRep}
              />
              <IconButton
                icon={props.isHiddenRep ? 'eye-off' : 'eye'}
                onPress={() => props.onIconRepPress((prev) => !prev)}
                containerStyle={styles.togglePasswordIconStyle}
              />
            </View>
            <View style={styles.buttonWrapperStyle}>
              <SignButton title="CONTINUE" onPress={props.handleRegistration} />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default memo(RegisterView);
