import React, { FC, memo } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

// styles
import styles from './styles';

interface IEditButtonViewProps {
  onPress(): void;
}

const EditButtonView: FC<IEditButtonViewProps> = (props) => {
  return (
    <View style={styles.editButtonViewStyle}>
      <TouchableOpacity
        style={styles.editButtonTouchStyles}
        onPress={props.onPress}>
        <Text>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(EditButtonView);
