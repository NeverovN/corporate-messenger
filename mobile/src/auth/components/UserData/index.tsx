import React, { memo, FC } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';

// components
import AuthInput from '../AuthInput';
import SignButton from '../SignButton';

// styles
import { useStyles } from './styles';

interface IUserDataViewProps {
  firstName: string;
  onChangeFirstName(firstName: string): void;

  lastName: string;
  onChangeLastName(lastName: string): void;

  finishRegistration(): void;
}

const UserDataView: FC<IUserDataViewProps> = (props) => {
  const styles = useStyles();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.screenStyle}
        behavior="padding"
        enabled>
        <View style={styles.screenWrapperStyle}>
          <View style={styles.screenNameWrapper}>
            <Text style={styles.screenNameStyle}>SIGN UP</Text>
          </View>
          <View style={styles.loginStyle}>
            <AuthInput
              placeholder="NAME"
              value={props.firstName}
              onChangeText={props.onChangeFirstName}
            />
            <AuthInput
              placeholder="SURNAME"
              value={props.lastName}
              onChangeText={props.onChangeLastName}
            />
            <View style={styles.buttonWrapperStyle}>
              <SignButton
                title="GET STARTED"
                onPress={props.finishRegistration}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default memo(UserDataView);
