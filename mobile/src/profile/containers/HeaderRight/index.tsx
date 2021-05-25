import React, { FC, memo } from 'react';

// components
import HeaderRightView from 'profile/components/HeaderRight';

// hooks
import { useSettingsNavigation } from 'profile/hooks/useSettingsNavigation';

interface IHeaderRightContainderProps {}

const HeaderRight: FC<IHeaderRightContainderProps> = () => {
  const navigate = useSettingsNavigation();

  return <HeaderRightView size={25} onPress={navigate} />;
};

export default memo(HeaderRight);
