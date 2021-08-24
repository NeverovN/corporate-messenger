import React, { FC, memo, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

// styles
import { useStyles } from './styles';

// common components
import IconButton from '@/common/components/Button/IconButton';

// containers
import ConfirmPasswordButton from '@/settings/containers/ConfirmPasswordButton';
import { useTheme } from 'react-native-stylex';

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
  const styles = useStyles();
  const { palette } = useTheme();
  const [isHiddenOld, setIsHiddenOld] = useState<boolean>(true);
  const [isHiddenNew, setIsHiddenNew] = useState<boolean>(true);
  const [isHiddenNewRep, setIsHiddenNewRep] = useState<boolean>(true);
  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior="padding"
      enabled>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.editPasswordScreenStyle}>
          <View style={styles.wrapper}>
            <Text style={styles.textStyle}>ENTER YOUR PREVIOUS PASSWORD</Text>
          </View>
          <View style={styles.inputWrapperStyle}>
            <TextInput
              style={styles.passwordInputStyle}
              autoCapitalize={'none'}
              value={props.oldPassword}
              placeholder="PREVIOUS PASSWORD"
              placeholderTextColor={palette.secondaryInactive}
              textAlign="center"
              onChangeText={props.onChangeOldPassword}
              secureTextEntry={isHiddenOld}
            />
            <IconButton
              icon={isHiddenOld ? 'eye-off' : 'eye'}
              containerStyle={styles.iconStyle}
              onPress={() => {
                setIsHiddenOld((prev) => !prev);
              }}
            />
          </View>
          <View style={styles.spacer} />
          <View style={styles.wrapper}>
            <Text style={styles.textStyle}>ENTER YOUR NEW PASSWORD</Text>
          </View>
          <View style={styles.inputWrapperStyle}>
            <TextInput
              style={styles.passwordInputStyle}
              autoCapitalize={'none'}
              value={props.newPassword}
              placeholder="NEW PASSWORD"
              placeholderTextColor={palette.secondaryInactive}
              textAlign="center"
              onChangeText={props.onChangeNewPassword}
              secureTextEntry={isHiddenNew}
            />
            <IconButton
              icon={isHiddenNew ? 'eye-off' : 'eye'}
              containerStyle={styles.iconStyle}
              onPress={() => {
                setIsHiddenNew((prev) => !prev);
              }}
            />
          </View>
          <View style={styles.inputWrapperStyle}>
            <TextInput
              style={styles.passwordInputStyle}
              autoCapitalize={'none'}
              value={props.newPasswordRep}
              placeholder="CONFIRM PASSWORD"
              placeholderTextColor={palette.secondaryInactive}
              textAlign="center"
              onChangeText={props.onChangeNewPasswordRep}
              secureTextEntry={isHiddenNewRep}
            />
            <IconButton
              icon={isHiddenNewRep ? 'eye-off' : 'eye'}
              containerStyle={styles.iconStyle}
              onPress={() => {
                setIsHiddenNewRep((prev) => !prev);
              }}
            />
          </View>
          <View style={styles.spacer} />
          <ConfirmPasswordButton
            edit={props.edit}
            oldPassword={props.oldPassword}
            newPassword={props.newPassword}
            newPasswordRep={props.newPasswordRep}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default memo(EditUsernameScreenView);
