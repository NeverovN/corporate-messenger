import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import styles from './styles';

// components
import TopTileBarView from '../TopTileBar';
import ContentView from '../Content';
import PostScreenBottomTileBar from '../PostScreenBottomTileBar';

export interface ITileViewProps {}

const TileView: FC<ITileViewProps> = () => {
  return (
    <View style={styles.tileStyle}>
      <TopTileBarView />
      <ContentView />
      <PostScreenBottomTileBar />
    </View>
  );
};

export default memo(TileView);
