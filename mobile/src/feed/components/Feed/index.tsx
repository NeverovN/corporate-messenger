import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

// styles
import styles from './styles';

// components
import TileView from '../Tile';

interface IFeedComponentProps {}

const FeedView: FC<IFeedComponentProps> = () => {
  return (
    //there would be a FlatList, but I didn't have time to make it work
    <View style={styles.feedStyle}>
      <TileView />
    </View>
  );
};

export default memo(FeedView);
