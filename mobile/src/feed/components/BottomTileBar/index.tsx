import React, { FC, memo } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// styles
import styles from './styles';

// components
import TouchableIconView from '../TouchableIcon';

interface IBottomTileBarViewProps {}

const BottomTileBar: FC<IBottomTileBarViewProps> = () => {
  return (
    <View style={styles.bottomTileBarStyle}>
      <TouchableIconView name="heart" size={35} />
      <TouchableIconView name="comment" size={35} />
    </View>
  );
};

export default memo(BottomTileBar);
