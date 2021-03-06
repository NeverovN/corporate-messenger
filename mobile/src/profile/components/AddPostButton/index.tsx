import React, { FC, memo } from 'react';
import { View } from 'react-native';

// common components
import IconWithTextButton from '@/common/components/Button/IconWithTextButton';

// styles
import { useStyles } from './styles';
import { IconType } from '@/common/types/styles';

interface IAddPostButtonViewProps {
  onPress(): void;
}

const AddPostButtonView: FC<IAddPostButtonViewProps> = (props) => {
  const styles = useStyles();
  return (
    <View style={styles.wrapperStyle}>
      <IconWithTextButton
        icon="plus"
        iconType={IconType.MEDIUM}
        containerStyle={styles.addPostButtonStyle}
        label="NEW POST"
        iconStyle={styles.iconStyle}
        labelStyle={styles.labelStyle}
        onPress={props.onPress}
      />
    </View>
  );
};

export default memo(AddPostButtonView);
