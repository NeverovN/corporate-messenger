import React, { FC, memo } from 'react';
import { FlatList, View, ListRenderItem } from 'react-native';

// components
import Tile from '../Tile';

// styles
import styles from './styles';

// types
import { IPostItem } from 'feed/types/feed';

interface IFriendFeedListViewProps {
  data: IPostItem[];
}

const renderChatItem: ListRenderItem<IPostItem> = () => {
  return <Tile />;
};

const FriendFeedView: FC<IFriendFeedListViewProps> = (props) => {
  return (
    <View style={styles.friendFeedStyle}>
      <FlatList renderItem={renderChatItem} data={props.data} />
    </View>
  );
};

export default memo(FriendFeedView);
