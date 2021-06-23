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
    <View style={styles.wrapperStyle}>
      <TextButton
        label="Add new post"
        containerStyle={styles.addPostButtonStyle}
        onPress={props.onPress}
      />
    </View>
  );
};

export default memo(AddPostButtonView);
