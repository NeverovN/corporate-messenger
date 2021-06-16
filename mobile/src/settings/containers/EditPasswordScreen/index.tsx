import React, { FC, memo } from 'react';

// components
import EditPasswordScreenView from '@/settings/components/EditPasswordScreen';

interface IEditPasswordScreenContainerProps {}

const EditPasswordScreenContainer: FC<IEditPasswordScreenContainerProps> = () => {
  return <EditPasswordScreenView />;
};

export default memo(EditPasswordScreenContainer);
