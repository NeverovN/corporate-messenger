import React, { memo, FC } from 'react';

import UserHeaderView from 'profile/components/UserHeader';

interface IUserHeaderContainerProps {
  image: string | null;
}

const UserHeaderContainer: FC<IUserHeaderContainerProps> = (props) => {
  return <UserHeaderView image={props.image} />;
};

export default memo(UserHeaderContainer);
