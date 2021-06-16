import React, { FC, memo } from 'react';

// components
import EditUsernameScreenView from '@/settings/components/EditUsernameScreen';

interface IEditUsernameScreenContainerProps {}

const EditUsernameScreenContainer: FC<IEditUsernameScreenContainerProps> = () => {
  return <EditUsernameScreenView />;
};

export default memo(EditUsernameScreenContainer);
