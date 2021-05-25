import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import styles from './styles';

// components
import TopTileBarView from '../TopTileBar';
import ContentView from '../Content';
import BottomTileBarView from '../BottomTileBar';

export interface ITileViewProps {}

const TileView: FC<ITileViewProps> = () => {
  return (
    <View style={styles.tileStyle}>
      <TopTileBarView />
      <ContentView />
      <BottomTileBarView />
    </View>
  );
};

export default memo(TileView);
