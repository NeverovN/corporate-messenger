import React, { FC, memo } from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';

// styles
import styles from './styles';

// components
import Comment from 'feed/containers/Comment';
import { ICommentItem } from '@/feed/types/comment';
import CommentInput from 'feed/containers/CommentInput';
import PostScreenTile from '../PostScreenTile';

interface IPostScreenViewProps {
  data: ICommentItem[];
}

const renderPostItem: ListRenderItem<ICommentItem> = ({ item }) => {
  return (
    <Comment
      id={item.id}
      content={item.content}
      author={item.author.id}
      createdAt={item.createdAt}
    />
  );
};

const PostScreenView: FC<IPostScreenViewProps> = (props) => {
  return (
    <View style={styles.postScreenStyle}>
      <FlatList
        ListHeaderComponent={PostScreenTile}
        data={props.data}
        renderItem={renderPostItem}
      />
      <CommentInput />
    </View>
  );
};

export default memo(PostScreenView);
