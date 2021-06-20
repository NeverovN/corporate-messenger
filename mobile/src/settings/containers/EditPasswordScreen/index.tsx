import React, { FC, memo, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

// components
import EditPasswordScreenView from '@/settings/components/EditPasswordScreen';

// types
import { EditPasswordNavigationProp } from 'settings/types/routes';

// containers
import HeaderRightPassword from '../HeaderRightPassword';

// hooks
import { useUpdatePassword } from '@/settings/hooks/useUpdatePassword';

interface IEditPasswordScreenContainerProps {}

const EditPasswordScreenContainer: FC<IEditPasswordScreenContainerProps> = () => {
  const navigation = useNavigation<EditPasswordNavigationProp>();
  const [oldPassword, setOldPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [newPasswordRep, setNewPasswordRep] = useState<string>('');
  const edit = useUpdatePassword(oldPassword, newPassword, newPasswordRep);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRightPassword
          oldPassword={oldPassword}
          newPassword={newPassword}
          newPasswordRep={newPasswordRep}
          edit={edit}
        />
      ),
    });
  }, [navigation, oldPassword, newPassword, newPasswordRep, edit]);

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
