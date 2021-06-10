import React, { FC, memo } from 'react';
import { useRoute } from '@react-navigation/native';

// components
import ThirdPartyUserView from 'profile/components/ThirdPartyUser';

// hooks
import { useUsersPosts } from 'profile/hooks/useUsersPosts';

// types
import { ThirdPartyUserRouteProp } from 'profile/types/routes';

interface IThirdPartyUserContainerProps {}

const ThirdPartyUserContainer: FC<IThirdPartyUserContainerProps> = () => {
  const { params } = useRoute<ThirdPartyUserRouteProp>();

  const posts = useUsersPosts(params.userId);

  return <ThirdPartyUserView data={posts} />;
};

export default memo(ThirdPartyUserContainer);
