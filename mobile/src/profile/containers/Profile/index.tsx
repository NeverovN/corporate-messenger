import React, { memo, FC } from 'react';

// hooks
import { useUsersPosts } from 'profile/hooks/useUsersPosts';

// components
import ProfileView from 'profile/components/Profile';
import { useGetRefreshProfile } from '@/profile/hooks/useGetRefreshProfile';

interface IProfileContainerProps {}

const Profile: FC<IProfileContainerProps> = () => {
  const posts = useUsersPosts();
  const { refresh, loading } = useGetRefreshProfile();

  return <ProfileView data={posts} refresh={refresh} loading={loading} />;
};

export default memo(Profile);
