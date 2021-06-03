import React, { FC, memo } from 'react';

// components
import EditButtonView from 'profile/components/EditButton';

// hooks
import { useHandleEdit } from 'profile/hooks/useHandleEdit';

interface IEditButtonContainerProps {}

const EditButtonContainer: FC<IEditButtonContainerProps> = () => {
  const handleEdit = useHandleEdit();

  return <EditButtonView onPress={handleEdit} />;
};

export default memo(EditButtonContainer);
