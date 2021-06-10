import React, { FC, memo } from 'react';

import ThirdPartyUserView from 'profile/components/ThirdPartyUser';

interface IThirdPartyUserContainerProps {}

const ThirdPartyUserContainer: FC<IThirdPartyUserContainerProps> = () => {
  return <ThirdPartyUserView />;
};

export default memo(ThirdPartyUserContainer);
