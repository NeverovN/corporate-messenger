import React, { FC, memo } from 'react';

// components
import PostScreenView from '@/feed/components/PostScreen';

// hooks
import { useGetComments } from '@/feed/hooks/useGetComments';

interface IPostScreenContainerProps {}

const PostScreenContainer: FC<IPostScreenContainerProps> = () => {
  const commentList = useGetComments();
  return <PostScreenView data={commentList} />;
};

export default memo(PostScreenContainer);
