import React, { FC, memo } from 'react';

// components
import AccountScreenView from '@/settings/components/AccountScreen';

interface IAccountScreenContainerProps {}

const AccountScreenContainer: FC<IAccountScreenContainerProps> = () => {
  return <AccountScreenView />;
};

export default memo(AccountScreenContainer);
