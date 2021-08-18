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
  const [isChanged, setIsChanged] = useState<boolean>(false);

  useEffect(() => {
    if (oldPassword === '' || newPassword === '' || newPasswordRep === '') {
      setIsChanged(false);
    } else {
      setIsChanged(true);
    }
  }, [oldPassword, newPassword, newPasswordRep]);

  if (isChanged) {
    return (
      <TextButton
        label="CONFIRM"
        containerStyle={styles.activeContainerStyle}
        onPress={edit}
        labelStyle={styles.labelStyle}
      />
    );
  }

  return (
    <TextButton
      label="CONFIRM"
      containerStyle={styles.inactiveContainerStyle}
      labelStyle={styles.labelStyle}
      onPress={() =>
        Toast.show({
          type: 'error',
          text1: 'Please, fill all fields',
          topOffset: 50,
        })
      }
    />
  );
};

export default memo(ConfirmPasswordButton);
