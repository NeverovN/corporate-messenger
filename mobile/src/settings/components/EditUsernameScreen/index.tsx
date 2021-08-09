import React, { FC, memo } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

// styles
import { useStyles } from './styles';

// containers
import ConfirmUsernameButton from '@/settings/containers/ConfirmUsernameButton';
import { useTheme } from 'react-native-stylex';

interface IEditUsernameScreenViewProps {
  names: [string, string];
  currentFirstName: string;
  currentLastName: string;
  onChangeFirstName(fName: string): void;
  onChangeLastName(lName: string): void;
  edit(): void;
}

const EditUsernameScreenView: FC<IEditUsernameScreenViewProps> = (props) => {
  const styles = useStyles();
  const { palette } = useTheme();
  const [firstName, lastName] = props.names;
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.editUsernameScreenStyle}>
        <View style={styles.currentNameStyle}>
          <Text style={styles.textStyle}>{`${firstName} ${lastName}`}</Text>
        </View>
        <View style={styles.spacer} />
        <View style={styles.textWrapper}>
          <Text style={styles.textStyle}>ENTER YOUR NEW NAME AND SURNAME</Text>
        </View>
        <TextInput
          style={styles.inputStyle}
          placeholder="NAME"
          placeholderTextColor={palette.secondaryInactive}
          textAlign="center"
          onChangeText={props.onChangeFirstName}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="SURNAME"
          placeholderTextColor={palette.secondaryInactive}
          textAlign="center"
          onChangeText={props.onChangeLastName}
        />
        <View style={styles.spacer} />
        <ConfirmUsernameButton
          initialNames={props.names}
          newNames={[props.currentFirstName, props.currentLastName]}
          edit={props.edit}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default memo(EditUsernameScreenView);
