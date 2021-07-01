import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import styles from './styles';

// components
import TouchableIconView from '../TouchableIcon';

interface IBottomTileBarViewProps {}

const BottomTileBar: FC<IBottomTileBarViewProps> = () => {
  return (
    <View style={styles.bottomTileBarStyle}>
      <TouchableIconView name="heart" size={30} />
    </View>
  );
};

export default memo(BottomTileBar);
