import React, { FC, memo } from 'react';
import { View, Text, TextInput } from 'react-native';

// styles
import styles from './styles';

interface IEditUsernameScreenViewProps {
  firstName: string;
  onChangeFirstName(fName: string): void;

  lastName: string;
  onChangeLastName(lName: string): void;
}

const EditUsernameScreenView: FC<IEditUsernameScreenViewProps> = (props) => {
  return (
    <View style={styles.editUsernameScreenStyle}>
      <Text style={styles.textStyle}>Edit username</Text>
      <TextInput
        style={styles.inputStyle}
        value={props.firstName}
        onChangeText={props.onChangeFirstName}
      />
      <TextInput
        style={styles.inputStyle}
        value={props.lastName}
        onChangeText={props.onChangeLastName}
      />
    </View>
  );
};

export default memo(EditUsernameScreenView);
