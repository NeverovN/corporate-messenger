import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import styles from './styles';

// components
import TopTileBarView from '../TopTileBar';
import ContentView from '../Content';
import BottomTileBarView from '../BottomTileBar';

export interface ITileViewProps {
  username: string;
  createdAt: string;
  avatar: string;

  textContent: string;
}

const TileView: FC<ITileViewProps> = (props) => {
  return (
    <View style={styles.tileStyle}>
      <TopTileBarView
        username={props.username}
        createdAt={props.createdAt}
        imgUrl={props.avatar}
      />
      <ContentView text={props.textContent} />
      <BottomTileBarView />
    </View>
  );
};

export default memo(TileView);
