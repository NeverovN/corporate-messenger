import React, { FC, memo } from 'react';
import { useRoute } from '@react-navigation/native';

// components
import ThirdPartyUserView from 'profile/components/ThirdPartyUser';

// hooks
import { useUsersPosts } from 'profile/hooks/useUsersPosts';

// types
import { ThirdPartyUserRouteProp } from 'profile/types/routes';
import { useGetRefreshProfile } from '@/profile/hooks/useGetRefreshProfile';

interface IThirdPartyUserContainerProps {}

const ThirdPartyUserContainer: FC<IThirdPartyUserContainerProps> = () => {
  const { params } = useRoute<ThirdPartyUserRouteProp>();

  const posts = useUsersPosts(params.userId);
  const { refresh, loading } = useGetRefreshProfile(params.userId);

  return (
    <ThirdPartyUserView data={posts} refresh={refresh} loading={loading} />
  );
};

export default memo(ThirdPartyUserContainer);
