import React, { FC, memo } from 'react';
import { View, Text, TextInput } from 'react-native';

// styles
import styles from './styles';

interface IEditEmailScreenViewProps {
  email: string;
  onEmailChange(email: string): void;
}

const EditEmailScreenView: FC<IEditEmailScreenViewProps> = (props) => {
  return (
    <View style={styles.editEmailScreenStyle}>
      <Text style={styles.textStyle}>Edit email</Text>
      <TextInput
        style={styles.inputStyle}
        value={props.email}
        onChangeText={props.onEmailChange}
      />
    </View>
  );
};

export default memo(EditEmailScreenView);
