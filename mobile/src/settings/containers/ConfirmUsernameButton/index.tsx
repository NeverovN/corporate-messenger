import React, { FC, memo, useEffect, useState } from 'react';

// common components
import TextButton from '@/common/components/Button/TextButton';

// styles
import { useStyles } from './styles';
import Toast from 'react-native-toast-message';

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
  const styles = useStyles();
  const [initialFirstName, initialLastName] = initialNames;
  const [newFirstName, newLastName] = newNames;
  const [isChangedFirstName, setIsChangedFirstName] = useState<boolean>(false);
  const [isChangedLastName, setIsChangedLastName] = useState<boolean>(false);

  useEffect(() => {
    if (initialFirstName === newFirstName || !newFirstName) {
      setIsChangedFirstName(false);
    } else {
      setIsChangedFirstName(true);
    }
    if (initialLastName === newLastName || !newLastName) {
      setIsChangedLastName(false);
    } else {
      setIsChangedLastName(true);
    }
  }, [initialFirstName, initialLastName, newFirstName, newLastName]);

  if (!isChangedFirstName && !isChangedLastName) {
    return (
      <TextButton
        label="CONFIRM"
        labelStyle={styles.labelStyle}
        containerStyle={styles.inactiveContainerStyle}
        onPress={() =>
          Toast.show({
            type: 'error',
            text1: 'Please, enter your new name and surname',
            topOffset: 50,
          })
        }
      />
    );
  }

  if (!isChangedFirstName) {
    return (
      <TextButton
        label="CONFIRM"
        labelStyle={styles.labelStyle}
        containerStyle={styles.inactiveContainerStyle}
        onPress={() =>
          Toast.show({
            type: 'error',
            text1: 'Please, enter your name',
            topOffset: 50,
          })
        }
      />
    );
  }

  if (!isChangedLastName) {
    return (
      <TextButton
        label="CONFIRM"
        labelStyle={styles.labelStyle}
        containerStyle={styles.inactiveContainerStyle}
        onPress={() =>
          Toast.show({
            type: 'error',
            text1: 'Please, enter your surname',
            topOffset: 50,
          })
        }
      />
    );
  }

  return (
    <TextButton
      containerStyle={styles.activeContainerStyle}
      labelStyle={styles.labelStyle}
      onPress={edit}
      label="CONFIRM"
    />
  );
};

export default memo(ConfirmUsernameButton);
