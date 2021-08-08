import React, { FC, memo } from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Text,
  TextInput,
  Keyboard,
} from 'react-native';

// styles
import { useStyles } from './styles';

// containers
import ConfirmEmailButton from '@/settings/containers/ConfirmEmailButton';
import { useTheme } from 'react-native-stylex';

interface IEditEmailScreenViewProps {
  email: string;
  currentEmail: string;
  onEmailChange(email: string): void;
  edit(): void;
}

const EditEmailScreenView: FC<IEditEmailScreenViewProps> = (props) => {
  const styles = useStyles();
  const { palette } = useTheme();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.editEmailScreenStyle}>
        <View style={styles.currentNameStyle}>
          <Text style={styles.textStyle}>{`${props.email}`}</Text>
        </View>
        <View style={styles.spacer} />
        <View style={styles.textWrapper}>
          <Text style={styles.textStyle}>ENTER YOUR NEW EMAIL</Text>
        </View>
        <TextInput
          style={styles.inputStyle}
          placeholder="EMAIL"
          placeholderTextColor={palette.secondaryInactive}
          textAlign="center"
          onChangeText={props.onEmailChange}
        />
        <View style={styles.spacer} />
        <ConfirmEmailButton
          initialValue={props.email}
          currentState={props.currentEmail}
          edit={props.edit}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default memo(EditEmailScreenView);
