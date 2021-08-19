import React, { FC, memo, useEffect, useState } from 'react';

// common components
import TextButton from '@/common/components/Button/TextButton';

// styles
import { useStyles } from './styles';
import Toast from 'react-native-toast-message';

interface IButtonProps {
  oldPassword: string;
  newPassword: string;
  newPasswordRep: string;
  edit(): void;
}

const ConfirmPasswordButton: FC<IButtonProps> = ({
  oldPassword,
  newPassword,
  newPasswordRep,
  edit,
}) => {
  const styles = useStyles();
  const [onPress, setOnPress] = useState<() => void>(() => {});
  const normalizedPassword = newPassword.replace(/\s+/g, ' ').trim();

  useEffect(() => {
    if (normalizedPassword !== newPassword) {
      setOnPress(() => () =>
        Toast.show({
          type: 'error',
          text1: 'Invalid password',
          text2: "Please, don't use anu spaces in your password",
          topOffset: 50,
        }),
      );
    } else if (
      oldPassword === '' ||
      newPassword === '' ||
      newPasswordRep === ''
    ) {
      setOnPress(() => () =>
        Toast.show({
          type: 'error',
          text1: 'Please, fill all fields',
          topOffset: 50,
        }),
      );
    } else {
      setOnPress(() => edit);
    }
  }, [oldPassword, newPassword, newPasswordRep, normalizedPassword, edit]);

  return (
    <TextButton
      label="CONFIRM"
      containerStyle={styles.activeContainerStyle}
      labelStyle={styles.labelStyle}
      onPress={onPress}
    />
  );
};

export default memo(ConfirmPasswordButton);
