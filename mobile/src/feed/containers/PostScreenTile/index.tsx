import React, { FC, memo } from 'react';

// components
import PostScreenTileView from '@/feed/components/PostScreenTile';
import { useGetPost } from '@/feed/hooks/useGetPost';

interface IPostScreenTileContainer {
  postId: string;
}

const PostScreenTileContainer: FC<IPostScreenTileContainer> = (props) => {
  const post = useGetPost(props.postId);
  return (
    <PostScreenTileView
      id={props.postId}
      author={post.author}
      avatar={post.avatar}
      createdAt={post.createdAt}
      textContent={post.textContent}
      mediaContent={post.mediaContent}
    />
  );
};

export default memo(PostScreenTileContainer);
