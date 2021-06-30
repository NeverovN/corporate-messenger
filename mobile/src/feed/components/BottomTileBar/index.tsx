import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import styles from './styles';

// common components
import IconWithTextButton from '@/common/components/Button/IconWithTextButton';

// components
import TouchableIconView from '../TouchableIcon';

// types
import { IconType } from '@/common/types/styles';

interface IBottomTileBarViewProps {
  commentCount: number;
  onCommentPressed(): void;
}

const BottomTileBar: FC<IBottomTileBarViewProps> = (props) => {
  const comments = props.commentCount > 0 ? props.commentCount.toString() : '';

  return (
    <View style={styles.bottomTileBarStyle}>
      <TouchableIconView name="heart" size={30} />
      <IconWithTextButton
        onPress={props.onCommentPressed}
        label={comments}
        iconType={IconType.LARGE}
        icon="comment"
        containerStyle={styles.containerStyle}
        labelStyle={styles.labelStyle}
      />
    </View>
  );
};

export default memo(BottomTileBar);
