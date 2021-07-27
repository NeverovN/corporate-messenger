import React, { FC, memo } from 'react';
import { View } from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';

// styles
import styles from './styles';

// components
import TopTileBarContainer from 'feed/containers/TopBar';
import ContentView from '../Content';

// containers
import BottomTileBarContainer from 'feed/containers/BottomTileBar';
import { IPostItem } from '@/feed/types/feed';

export interface ITileViewProps extends IPostItem {}

const TileView: FC<ITileViewProps> = (props) => {
  return (
    <View style={styles.tileStyle}>
      <TopTileBarContainer
        id={props.id}
        author={props.author}
        createdAt={props.createdAt}
        avatar={props.avatar}
      />
      {props.textContent ? <ContentView text={props.textContent} /> : null}
      <BottomTileBarContainer postId={props.id} />
    </View>
  );
};

export default memo(TileView);
