import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import styles from './styles';

// common components
import IconWithTextButton from '@/common/components/Button/IconWithTextButton';

// components
import TouchableIconView from '../TouchableIcon';
import { IconType } from '@/common/types/styles';

interface IBottomTileBarViewProps {
  likeCount: number;
  onLikePressed(): void;
}

const BottomTileBar: FC<IBottomTileBarViewProps> = (props) => {
  const likes = props.likeCount > 0 ? props.likeCount.toString() : '';

  return (
    <View style={styles.bottomTileBarStyle}>
      <IconWithTextButton
        onPress={props.onLikePressed}
        label={likes}
        iconType={IconType.LARGE}
        icon="heart"
        containerStyle={styles.containerStyle}
        labelStyle={styles.labelStyle}
      />
      <TouchableIconView name="comment" size={30} />
    </View>
  );
};

export default memo(BottomTileBar);
