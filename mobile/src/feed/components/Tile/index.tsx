import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import styles from './styles';

// components
import TopTileBarContainer from 'feed/containers/TopBar';
import ContentView from '../Content';
import BottomTileBarView from '../BottomTileBar';

export interface ITileViewProps {
  author: string;
  createdAt: string;
  avatar: string;
}

const TileView: FC<ITileViewProps> = (props) => {
  return (
    <View style={styles.tileStyle}>
      <TopTileBarContainer
        author={props.author}
        createdAt={props.createdAt}
        avatar={props.avatar}
      />
      <ContentView />
      <BottomTileBarView />
    </View>
  );
};

export default memo(TileView);
