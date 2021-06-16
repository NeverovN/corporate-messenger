import React, { FC, memo, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

// components
import EditPasswordScreenView from '@/settings/components/EditPasswordScreen';

// types
import { EditPasswordNavigationProp } from 'settings/types/routes';

interface IEditPasswordScreenContainerProps {}

const EditPasswordScreenContainer: FC<IEditPasswordScreenContainerProps> = () => {
  const navigation = useNavigation<EditPasswordNavigationProp>();
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [newPasswordRep, setNewPasswordRep] = useState<string>('');

  useEffect(() => {
    navigation.setParams({ old: oldPassword });
  }, [navigation, oldPassword]);

  useEffect(() => {
    navigation.setParams({ new: newPassword });
  }, [navigation, newPassword]);

  useEffect(() => {
    navigation.setParams({ newRep: newPasswordRep });
  }, [navigation, newPasswordRep]);

  return (
    <EditPasswordScreenView
      oldPassword={oldPassword}
      onChangeOldPassword={setOldPassword}
      newPassword={newPassword}
      onChangeNewPassword={setNewPassword}
      newPasswordRep={newPasswordRep}
      onChangeNewPasswordRep={setNewPasswordRep}
    />
  );
};

export default memo(EditPasswordScreenContainer);
