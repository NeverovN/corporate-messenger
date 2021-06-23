import React, { FC, memo } from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Text,
  TextInput,
  Keyboard,
} from 'react-native';

// styles
import styles from './styles';

interface IEditEmailScreenViewProps {
  email: string;
  onEmailChange(email: string): void;
}

const EditEmailScreenView: FC<IEditEmailScreenViewProps> = (props) => {
  return (
    <TouchableWithoutFeedback
      style={styles.dismissStyle}
      onPress={() => Keyboard.dismiss()}>
      <View style={styles.editEmailScreenStyle}>
        <Text style={styles.textStyle}>Edit email</Text>
        <TextInput
          style={styles.inputStyle}
          value={props.email}
          onChangeText={props.onEmailChange}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default memo(EditEmailScreenView);
