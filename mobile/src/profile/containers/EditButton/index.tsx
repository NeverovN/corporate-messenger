import React, { FC, memo } from 'react';

// components
import EditButtonView from 'profile/components/EditButton';

// hooks
import { useHandleEdit } from 'profile/hooks/useHandleEdit';

interface IEditButtonContainderProps {}

const EditButtonContainer: FC<IEditButtonContainderProps> = () => {
  const handleEdit = useHandleEdit();

  return <EditButtonView onPress={handleEdit} />;
};

export default memo(EditButtonContainer);
