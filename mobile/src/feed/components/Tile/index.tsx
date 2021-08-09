import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import { useStyles } from './styles';

// components
import TopTileBarContainer from 'feed/containers/TopBar';
import ContentView from '../Content';

// containers
import BottomTileBarContainer from 'feed/containers/BottomTileBar';
import { IPostItem } from '@/feed/types/feed';

export interface ITileViewProps extends IPostItem {}

const TileView: FC<ITileViewProps> = (props) => {
  const styles = useStyles();
  return (
    <View style={styles.tileStyle}>
      <TopTileBarContainer
        id={props.id}
        author={props.author}
        createdAt={props.createdAt}
        avatar={props.avatar}
      />
      <View style={styles.centringWrapper}>
        <View style={styles.spacer} />
      </View>
      {props.textContent ? <ContentView text={props.textContent} /> : null}
      <View style={styles.centringWrapper}>
        <View style={styles.spacer} />
      </View>
      <BottomTileBarContainer postId={props.id} />
    </View>
  );
};

export default memo(TileView);
