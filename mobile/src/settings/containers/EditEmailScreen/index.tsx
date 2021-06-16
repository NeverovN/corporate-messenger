import React, { FC, memo } from 'react';

// components
import EditEmailScreenView from '@/settings/components/EditEmailScreen';

interface IEditEmailScreenContainerProps {}

const EditEmailScreenContainer: FC<IEditEmailScreenContainerProps> = () => {
  return <EditEmailScreenView />;
};

export default memo(EditEmailScreenContainer);
