import React, { memo, FC } from 'react';

// hooks
import { useUsersPosts } from 'profile/hooks/useUsersPosts';

// components
import ProfileView from 'profile/components/Profile';
import { useNewPostSubscription } from '@/common/types/gql.generated';

interface IProfileContainerProps {}

const Profile: FC<IProfileContainerProps> = () => {
  const posts = useUsersPosts();
  useNewPostSubscription({ onSubscriptionData: (data) => console.log(data) });

  return <ProfileView data={posts} />;
};

export default memo(Profile);
