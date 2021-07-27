import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import styles from './styles';

// common components
import IconWithTextButton from '@/common/components/Button/IconWithTextButton';

// types
import { IconType } from '@/common/types/styles';

// consts
import COLORS from '@/common/constants/colors';

interface IBottomTileBarViewProps {
  liked: boolean;
  likeCount: number;
  onLikePressed(): void;
}

const BottomTileBar: FC<IBottomTileBarViewProps> = (props) => {
  const likes = props.likeCount ? props.likeCount.toString() : '';
  const likeColor = props.liked ? COLORS.red : COLORS.black;

  return (
    <View style={styles.bottomTileBarStyle}>
      <IconWithTextButton
        label={likes}
        icon="like"
        iconColor={likeColor}
        iconType={IconType.LARGE}
        containerStyle={styles.containerStyle}
        labelStyle={styles.labelStyle}
        onPress={props.onLikePressed}
      />
    </View>
  );
};

export default memo(BottomTileBar);
