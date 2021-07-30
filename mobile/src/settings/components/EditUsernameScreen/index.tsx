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
import HeaderRightUsername from '@/settings/containers/HeaderRightUsername';

interface IEditUsernameScreenViewProps {
  names: [string, string];
  currentFirstName: string;
  currentLastName: string;
  onChangeFirstName(fName: string): void;
  onChangeLastName(lName: string): void;
  edit(): void;
}

const EditUsernameScreenView: FC<IEditUsernameScreenViewProps> = (props) => {
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
          placeholderTextColor={COLORS.secondaryInactive}
          textAlign="center"
          onChangeText={props.onChangeFirstName}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="SURNAME"
          placeholderTextColor={COLORS.secondaryInactive}
          textAlign="center"
          onChangeText={props.onChangeLastName}
        />
        <View style={styles.spacer} />
        <HeaderRightUsername
          initialNames={props.names}
          newNames={[props.currentFirstName, props.currentLastName]}
          edit={props.edit}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default memo(EditUsernameScreenView);
