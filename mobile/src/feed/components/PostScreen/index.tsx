import React, { FC, memo } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  ListRenderItem,
  SafeAreaView,
} from 'react-native';

// styles
import { useStyles } from './styles';

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
      content={item.content || ''}
      author={item.author.id}
      createdAt={item.createdAt}
    />
  );
};

const PostScreenView: FC<IPostScreenViewProps> = (props) => {
  const styles = useStyles();
  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior="padding"
      keyboardVerticalOffset={100}
      enabled>
      <SafeAreaView style={styles.postScreenStyle}>
        <FlatList
          ListHeaderComponent={<PostScreenTile postId={props.postId} />}
          data={props.data}
          renderItem={renderPostItem}
          style={styles.listStyle}
        />
        <CommentInput />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default memo(PostScreenView);
