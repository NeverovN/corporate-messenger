import React, { FC, memo } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

// common components
import TextButton from '@/common/components/Button/TextButton';

// styles
import styles from './styles';

interface IAddPostButtonViewProps {
  onPress(): void;
}

const AddPostButtonView: FC<IAddPostButtonViewProps> = (props) => {
  return (
    <View style={styles.addPostButtonViewStyle}>
      <TouchableOpacity
        style={styles.addPostButtonTouchStyle}
        onPress={props.onPress}>
        <Text>Create new post</Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(AddPostButtonView);
