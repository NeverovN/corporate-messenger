import React, { memo, FC } from 'react';

import UserImageView from 'profile/components/UserImage';

interface IUserImageContainerProps {}

const UserImageContainer: FC<IUserImageContainerProps> = () => {
  return <UserImageView />;
};

export default memo(UserImageContainer);
