import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import styles from './styles';

// components
import TopTileBarContainer from 'feed/containers/TopBar';
import ContentView from '../Content';

// containers
import BottomTileBarContainer from 'feed/containers/BottomTileBar';

export interface ITileViewProps {
  createdAt: string;
  avatar: string;
  postId: string;
  author: {
    id: string;
    name: string;
  };
  textContent: string | null;
}
const TileView: FC<ITileViewProps> = (props) => {
  return (
    <View style={styles.tileStyle}>
      <TopTileBarContainer
        id={props.postId}
        author={props.author}
        createdAt={props.createdAt}
        avatar={props.avatar}
      />
      {props.textContent ? <ContentView text={props.textContent} /> : null}
      <BottomTileBarContainer postId={props.postId} />
    </View>
  );
};

export default memo(TileView);
