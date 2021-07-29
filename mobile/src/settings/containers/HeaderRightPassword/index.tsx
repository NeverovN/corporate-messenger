import React, { FC, memo, useEffect, useState } from 'react';

// common components
import TextButton from '@/common/components/Button/TextButton';

// styles
import styles from './styles';
import { Alert } from 'react-native';

interface IHeaderProps {
  oldPassword: string;
  newPassword: string;
  newPasswordRep: string;
  edit(): void;
}

const HeaderRightPassword: FC<IHeaderProps> = ({
  oldPassword,
  newPassword,
  newPasswordRep,
  edit,
}) => {
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
        Alert.alert('Error', 'Please provide each fields with data')
      }
    />
  );
};

export default memo(HeaderRightPassword);
