import React, { memo, FC } from 'react';

import ProfileView from '../../components/Profile';

interface IProfileContainerProps {}

const Profile: FC<IProfileContainerProps> = () => {
  return <ProfileView />;
};

export default memo(Profile);
