import React, { FC, memo } from 'react';
import { useRoute } from '@react-navigation/native';

// components
import PostScreenView from '@/feed/components/PostScreen';

// hooks
import { useGetComments } from '@/feed/hooks/useGetComments';

// types
import { PostScreenRouteProp } from '@/feed/types/routes';

interface IPostScreenContainerProps {}

const PostScreenContainer: FC<IPostScreenContainerProps> = () => {
  const { params } = useRoute<PostScreenRouteProp>();

  const { data, refresh, loading } = useGetComments();
  return (
    <PostScreenView
      data={data}
      postId={params.postId}
      refresh={refresh}
      loading={loading}
    />
  );
};

export default memo(PostScreenContainer);
