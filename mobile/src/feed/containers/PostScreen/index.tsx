import React, { FC, memo } from 'react';

// components
import PostScreenView from '@/feed/components/PostScreen';

// hooks
import { useGetComments } from '@/feed/hooks/useGetComments';
import { useRoute } from '@react-navigation/native';
import { PostScreenRouteProp } from '@/feed/types/routes';

interface IPostScreenContainerProps {}

const PostScreenContainer: FC<IPostScreenContainerProps> = () => {
  const { params } = useRoute<PostScreenRouteProp>();
  const commentList = useGetComments();
  return <PostScreenView data={commentList} postId={params.postId} />;
};

export default memo(PostScreenContainer);
