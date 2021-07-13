import React, { FC, memo } from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';

// styles
import styles from './styles';

// components
import Comment from 'feed/containers/Comment';

// containers
import CommentInput from 'feed/containers/CommentInput';
import PostScreenTile from 'feed/containers/PostScreenTile';

// types
import { ICommentItem } from '@/feed/types/comment';

interface IPostScreenViewProps {
  data: ICommentItem[];
  postId: string;
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
        ListHeaderComponent={<PostScreenTile postId={props.postId} />}
        data={props.data}
        renderItem={renderPostItem}
      />
      <CommentInput />
    </View>
  );
};

export default memo(PostScreenView);
