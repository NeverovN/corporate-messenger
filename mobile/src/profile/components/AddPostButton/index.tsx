import React, { FC, memo } from 'react';
import { View } from 'react-native';

// common components
import IconWithTextButton from '@/common/components/Button/IconWithTextButton';

// styles
import styles from './styles';
import { IconType } from '@/common/types/styles';

interface IAddPostButtonViewProps {
  onPress(): void;
}

const AddPostButtonView: FC<IAddPostButtonViewProps> = (props) => {
  return (
    <View style={styles.wrapperStyle}>
      <IconWithTextButton
        icon="plus"
        iconType={IconType.LARGE}
        containerStyle={styles.addPostButtonStyle}
        label="New post"
        onPress={props.onPress}
      />
    </View>
  );
};

export default memo(AddPostButtonView);
