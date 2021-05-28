import React, { FC, memo } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

// styles
import styles from './styles';

interface IAddPostButtonViewProps {
  onPress(): void;
}

const AddPostButtonView: FC<IAddPostButtonViewProps> = (props) => {
  return (
    <View style={styles.addPostButtonViewStyle}>
      <TouchableOpacity
        style={styles.addPostButtontTouchSyles}
        onPress={props.onPress}>
        <Text>Add new post</Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(AddPostButtonView);
