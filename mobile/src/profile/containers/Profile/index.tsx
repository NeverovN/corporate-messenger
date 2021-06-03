import React, { memo, FC } from 'react';

// hooks
import { useUsersPosts } from 'profile/hooks/useUsersPosts';

// components
import ProfileView from 'profile/components/Profile';

interface IProfileContainerProps {}

const Profile: FC<IProfileContainerProps> = () => {
  const posts = useUsersPosts();
  console.log('re-render profile');

  return <ProfileView data={posts} />;
};

export default memo(Profile);
