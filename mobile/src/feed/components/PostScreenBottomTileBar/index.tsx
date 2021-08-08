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
}

const BottomTileBar: FC<IBottomTileBarViewProps> = (props) => {
  const styles = useStyles();
  const { palette } = useTheme();
  const likes = props.likeCount ? props.likeCount.toString() : '';
  const icon: IconName = props.liked ? 'liked' : 'unliked';

  return (
    <View style={styles.bottomTileBarStyle}>
      <IconWithTextButton
        label={likes}
        icon={icon}
        iconColor={palette.secondary}
        iconType={IconType.LARGE}
        containerStyle={styles.containerStyle}
        labelStyle={styles.labelStyle}
        onPress={props.onLikePressed}
      />
    </View>
  );
};

export default memo(BottomTileBar);
