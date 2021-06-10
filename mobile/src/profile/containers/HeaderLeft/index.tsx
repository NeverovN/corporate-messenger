import React, { FC, memo } from 'react';

// components
import HeaderLeftView from 'profile/components/HeaderLeft';

// hooks
import { useSearchNavigation } from 'profile/hooks/useSearchNavigation';

interface IHeaderRightContainerProps {}

const HeaderRight: FC<IHeaderRightContainerProps> = () => {
  const navigate = useSearchNavigation();

  return <HeaderLeftView size={25} onPress={navigate} />;
};

export default memo(HeaderRight);
