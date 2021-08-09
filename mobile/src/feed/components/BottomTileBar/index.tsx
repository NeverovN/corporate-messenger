import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import { useStyles } from './styles';

// common components
import IconWithTextButton from '@/common/components/Button/IconWithTextButton';

// types
import { IconType } from '@/common/types/styles';

import { IconName } from '@/common/types/iconNames';
import { useTheme } from 'react-native-stylex';

interface IBottomTileBarViewProps {
  liked: boolean;
  likeCount: number;
  onLikePressed(): void;
  commentCount: number;
  onCommentPressed(): void;
}

const BottomTileBar: FC<IBottomTileBarViewProps> = (props) => {
  const styles = useStyles();
  const { palette } = useTheme();
  const comments = props.commentCount > 0 ? props.commentCount.toString() : '';

  const likes = props.likeCount > 0 ? props.likeCount.toString() : '';

  const icon: IconName = props.liked ? 'liked' : 'unliked';

  return (
    <View style={styles.bottomTileBarStyle}>
      <IconWithTextButton
        onPress={props.onLikePressed}
        label={likes}
        iconType={IconType.LARGE}
        icon={icon}
        iconColor={palette.secondary}
        containerStyle={styles.containerStyle}
        labelStyle={styles.labelStyle}
      />
      <IconWithTextButton
        onPress={props.onCommentPressed}
        label={comments}
        iconType={IconType.LARGE}
        icon="comment"
        iconColor={palette.secondary}
        containerStyle={styles.containerStyle}
        labelStyle={styles.labelStyle}
      />
    </View>
  );
};

export default memo(BottomTileBar);
