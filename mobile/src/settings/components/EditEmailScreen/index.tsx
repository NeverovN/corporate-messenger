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

// containers
import HeaderRightEmail from '@/settings/containers/HeaderRightEmail';

// colors
import COLORS from 'common/constants/colors';

interface IEditEmailScreenViewProps {
  email: string;
  currentEmail: string;
  onEmailChange(email: string): void;
  edit(): void;
}

const EditEmailScreenView: FC<IEditEmailScreenViewProps> = (props) => {
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
          placeholderTextColor={COLORS.secondaryInactive}
          textAlign="center"
          onChangeText={props.onEmailChange}
        />
        <View style={styles.spacer} />
        <HeaderRightEmail
          initialValue={props.email}
          currentState={props.currentEmail}
          edit={props.edit}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default memo(EditEmailScreenView);
