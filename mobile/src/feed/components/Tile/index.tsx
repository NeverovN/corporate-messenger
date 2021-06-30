import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import styles from './styles';

// components
import TopTileBarView from '../TopTileBar';
import ContentView from '../Content';
import BottomTileBarContainer from 'feed/containers/BottomTileBar';

export interface ITileViewProps {
  postId: string;
}

const TileView: FC<ITileViewProps> = (props) => {
  return (
    <View style={styles.tileStyle}>
      <TopTileBarView />
      <ContentView />
      <BottomTileBarContainer postId={props.postId} />
    </View>
  );
};

export default memo(TileView);
