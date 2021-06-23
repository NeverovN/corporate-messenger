import React, { FC, memo } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

// styles
import styles from './styles';

interface IEditPasswordScreenViewProps {
  oldPassword: string;
  onChangeOldPassword(oPassword: string): void;

  newPassword: string;
  onChangeNewPassword(nPassword: string): void;

  newPasswordRep: string;
  onChangeNewPasswordRep(nPasswordRep: string): void;
}

const EditUsernameScreenView: FC<IEditPasswordScreenViewProps> = (props) => {
  return (
    <TouchableWithoutFeedback
      style={styles.dismissStyle}
      onPress={() => Keyboard.dismiss()}>
      <View style={styles.editPasswordScreenStyle}>
        <Text style={styles.textStyle}>Edit password</Text>
        <TextInput
          style={styles.inputStyle}
          value={props.oldPassword}
          onChangeText={props.onChangeOldPassword}
        />
        <TextInput
          style={styles.inputStyle}
          value={props.newPassword}
          onChangeText={props.onChangeNewPassword}
        />
        <TextInput
          style={styles.inputStyle}
          value={props.newPasswordRep}
          onChangeText={props.onChangeNewPasswordRep}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default memo(EditUsernameScreenView);
