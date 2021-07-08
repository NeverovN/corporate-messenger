import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import styles from './styles';

// components
import TopTileBarContainer from 'feed/containers/TopBar';
import ContentView from '../Content';
import PostScreenBottomTileBarContainer from 'feed/containers/PostScreenBottomTileBar';

export interface IPostTileViewProps {
  id: string;
  createdAt: string;
  avatar: string;
  author: {
    id: string;
    name: string;
  };
  mediaContent: string[] | null;
  textContent: string | null;
}

const PostTileView: FC<IPostTileViewProps> = (props) => {
  return (
    <View style={styles.tileStyle}>
      <TopTileBarContainer
        author={props.author}
        createdAt={props.createdAt}
        avatar={props.avatar}
      />
      {props.textContent ? <ContentView text={props.textContent} /> : null}
      <PostScreenBottomTileBarContainer postId={props.id} />
    </View>
  );
};

export default memo(PostTileView);
