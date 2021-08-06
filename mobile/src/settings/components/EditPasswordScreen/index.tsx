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

// colors
import COLORS from 'common/constants/colors';

// containers
import ConfirmPasswordButton from '@/settings/containers/ConfirmPasswordButton';

interface IEditPasswordScreenViewProps {
  oldPassword: string;
  onChangeOldPassword(oPassword: string): void;

  newPassword: string;
  onChangeNewPassword(nPassword: string): void;

  newPasswordRep: string;
  onChangeNewPasswordRep(nPasswordRep: string): void;

  edit(): void;
}

const EditUsernameScreenView: FC<IEditPasswordScreenViewProps> = (props) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.editPasswordScreenStyle}>
        <View style={styles.wrapper}>
          <Text style={styles.textStyle}>ENTER YOUR PREVIOUS PASSWORD</Text>
        </View>
        <TextInput
          style={styles.inputStyle}
          placeholder="PREW PASSWORD"
          placeholderTextColor={COLORS.secondaryInactive}
          textAlign="center"
          onChangeText={props.onChangeOldPassword}
          secureTextEntry={true}
        />
        <View style={styles.spacer} />
        <View style={styles.wrapper}>
          <Text style={styles.textStyle}>ENTER YOUR NEW PASSWORD</Text>
        </View>
        <TextInput
          style={styles.inputStyle}
          placeholder="NEW PASSWORD"
          placeholderTextColor={COLORS.secondaryInactive}
          textAlign="center"
          onChangeText={props.onChangeNewPassword}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="CONFIRM PASSWORD"
          placeholderTextColor={COLORS.secondaryInactive}
          textAlign="center"
          onChangeText={props.onChangeNewPasswordRep}
        />
        <View style={styles.spacer} />
        <ConfirmPasswordButton
          edit={props.edit}
          oldPassword={props.oldPassword}
          newPassword={props.newPassword}
          newPasswordRep={props.newPasswordRep}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default memo(EditUsernameScreenView);
