import React, { FC, memo } from 'react';
import { View } from 'react-native';

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
        containerStyle={styles.addPostButtonStyle}
        label="Create new post"
        onPress={props.onPress}
      />
    </View>
  );
};

export default memo(AddPostButtonView);
