import React, { memo, FC } from 'react';

// components
import UserInfoView from 'profile/components/UserInfo';

// hooks
import { useGetUser } from '@/profile/hooks/useGetUser';

interface IUserInfoContainerProps {
  userId?: string;
}

const UserInfoContainer: FC<IUserInfoContainerProps> = (props) => {
  const userName = useGetUser(props.userId);
  return <UserInfoView userName={userName} />;
};

export default memo(UserInfoContainer);
