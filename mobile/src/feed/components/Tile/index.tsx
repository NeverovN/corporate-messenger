import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import styles from './styles';

// components
import TopTileBarView from '../TopTileBar';
import ContentView from '../Content';
import BottomTileBarView from 'feed/containers/BottomTileBar';

export interface ITileViewProps {
  id: string;
}

const TileView: FC<ITileViewProps> = (props) => {
  return (
    <View style={styles.tileStyle}>
      <TopTileBarView />
      <ContentView />
      <BottomTileBarView postId={props.id} />
    </View>
  );
};

export default memo(TileView);
