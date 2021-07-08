import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import styles from './styles';

// common components
import IconWithTextButton from '@/common/components/Button/IconWithTextButton';

// types
import { IconType } from '@/common/types/styles';

interface IBottomTileBarViewProps {
  likeCount: number;
}

const BottomTileBar: FC<IBottomTileBarViewProps> = (props) => {
  const likes = props.likeCount ? props.likeCount.toString() : '';
  return (
    <View style={styles.bottomTileBarStyle}>
      <IconWithTextButton
        label={likes}
        icon="heart"
        iconType={IconType.LARGE}
        containerStyle={styles.iconStyle}
      />
    </View>
  );
};

export default memo(BottomTileBar);
