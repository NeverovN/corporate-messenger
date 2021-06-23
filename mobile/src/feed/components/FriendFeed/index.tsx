import React, { FC, memo } from 'react';
import { FlatList, View, ListRenderItem } from 'react-native';

// components
import Tile from '../Tile';

// styles
import styles from './styles';

// types
import { IPostItem } from 'profile/types/post';

interface IFriendFeedListViewProps {
  data: IPostItem[];
}

const renderFeedItem: ListRenderItem<IPostItem> = ({ item }) => {
  return (
    <Tile
      username={item.author}
      avatar={item.avatar}
      createdAt={item.createdAt}
      textContent={item.textContent}
    />
  );
};

const FriendFeedView: FC<IFriendFeedListViewProps> = (props) => {
  return (
    <View style={styles.friendFeedStyle}>
      <FlatList renderItem={renderFeedItem} data={props.data} />
    </View>
  );
};

export default memo(FriendFeedView);
