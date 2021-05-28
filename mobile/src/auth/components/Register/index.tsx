import React, { memo, FC } from 'react';
import { View } from 'react-native';

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

  firstName: string;
  onChangeFirstName(firstName: string): void;

  lastName: string;
  onChangeLastName(lastName: string): void;

  handleRegistration(): void;
}

const RegisterView: FC<IRegisterScreenProps> = (props) => {
  return (
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
      <AuthInput
        placeholder="enter your password"
        value={props.password}
        onChangeText={props.onChangePassword}
      />
      <AuthInput
        placeholder="confirm your password"
        value={props.passwordRepeat}
        onChangeText={props.onChangePasswordRepeat}
      />
      <SignButton title="SIGN UP" onPress={props.handleRegistration} />
    </View>
  );
};

export default memo(RegisterView);
