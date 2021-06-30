import React, { FC, memo } from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';

// styles
import styles from './styles';

// components
import Tile from '../Tile';
import Comment from '../Comment';
import { ICommentItem } from '@/feed/types/comment';

interface IPostScreenViewProps {
  data: ICommentItem[];
}

const renderPostItem: ListRenderItem<ICommentItem> = ({ item }) => {
  return <Comment text={item.text} />;
};

const PostScreenView: FC<IPostScreenViewProps> = (props) => {
  return (
    <View style={styles.postScreenStyle}>
      <FlatList
        ListHeaderComponent={Tile}
        data={props.data}
        renderItem={renderPostItem}
      />
    </View>
  );
};

export default memo(PostScreenView);
