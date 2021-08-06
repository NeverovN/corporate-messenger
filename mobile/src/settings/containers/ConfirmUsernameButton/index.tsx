import React, { FC, memo, useEffect, useState } from 'react';
import { Alert } from 'react-native';

// common components
import TextButton from '@/common/components/Button/TextButton';

// styles
import styles from './styles';

interface IButtonProps {
  initialNames: [string, string];
  newNames: [string, string];
  edit(): void;
}

const ConfirmUsernameButton: FC<IButtonProps> = ({
  initialNames,
  newNames,
  edit,
}) => {
  const [initialFirstName, initialLastName] = initialNames;
  const [newFirstName, newLastName] = newNames;
  const [isChanged, setIsChanged] = useState<boolean>(false);

  useEffect(() => {
    if (
      initialFirstName === newFirstName &&
      initialLastName === newLastName &&
      newFirstName &&
      newLastName
    ) {
      setIsChanged(false);
    } else {
      setIsChanged(true);
    }
  }, [initialFirstName, initialLastName, newFirstName, newLastName]);

  if (isChanged) {
    return (
      <TextButton
        containerStyle={styles.activeContainerStyle}
        labelStyle={styles.labelStyle}
        onPress={edit}
        label="CONFIRM"
      />
    );
  }

  return (
    <TextButton
      label="CONFIRM"
      labelStyle={styles.labelStyle}
      containerStyle={styles.inactiveContainerStyle}
      onPress={() => Alert.alert('Error', 'Please enter correct username')}
    />
  );
};

export default memo(ConfirmUsernameButton);
