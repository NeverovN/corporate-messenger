import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface ISignButtonProps {
  title?: string;
  onPress?(): void;
}

const SignButton: React.FC<ISignButtonProps> = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.touchStyle}>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(SignButton);
