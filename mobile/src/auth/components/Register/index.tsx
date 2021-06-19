import React, { memo, FC } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

// styles
import styles from './styles';

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
    <KeyboardAvoidingView
      style={styles.touchStyle}
      behavior="padding"
      keyboardVerticalOffset={40}
      enabled>
      <TouchableWithoutFeedback
        style={styles.touchStyle}
        onPress={() => Keyboard.dismiss()}>
        <View style={styles.registerStyle}>
          <AuthInput
            placeholder="enter your login"
            value={props.email}
            onChangeText={props.onChangeEmail}
          />
          <AuthInput
            placeholder="enter your First Name"
            value={props.firstName}
            onChangeText={props.onChangeFirstName}
          />
          <AuthInput
            placeholder="enter your Last Name"
            value={props.lastName}
            onChangeText={props.onChangeLastName}
          />
          <View style={styles.passwordStyle}>
            <AuthInput
              placeholder="enter your password"
              value={props.password}
              onChangeText={props.onChangePassword}
              secure={props.isHidden}
            />
            <Icon name={props.iconName} size={25} onPress={props.onIconPress} />
          </View>
          <View style={styles.passwordStyle}>
            <AuthInput
             placeholder="confirm your password"
             value={props.passwordRepeat}
              onChangeText={props.onChangePasswordRepeat}
              secure={props.isHidden}
            />
            <Icon name={props.iconName} size={25} onPress={props.onIconPress} />
          </View>
          <SignButton title="SIGN UP" onPress={props.handleRegistration} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default memo(RegisterView);
