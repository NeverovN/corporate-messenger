import React, { FC, memo } from 'react';

// components
import CreatePostScreenView from '@/profile/components/CreatePostScreen';

interface ICreatePostScreenContainerProps {}

const CreatePostScreenContainer: FC<ICreatePostScreenContainerProps> = () => {
  return <CreatePostScreenView />;
};

export default memo(CreatePostScreenContainer);
