import React, { FC, memo, useEffect, useRef, useState } from 'react';

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
  const normalizedFName = newFirstName.replace(/\s+/g, ' ').trim();
  const normalizedLName = newLastName.replace(/\s+/g, ' ').trim();

  const [onPress, setOnPress] = useState<() => void>(() => {});

  useEffect(() => {
    if (
      (initialFirstName === normalizedFName &&
        initialLastName === normalizedLName) ||
      (!normalizedLName && !normalizedLName)
    ) {
      setOnPress(() => () => {
        Toast.show({
          type: 'error',
          text1: 'Please, enter your new name and surname',
          topOffset: 50,
        });
      });
    } else if (initialFirstName === normalizedFName || !newFirstName) {
      setOnPress(() => () => {
        Toast.show({
          type: 'error',
          text1: 'Please, enter your new name',
          topOffset: 50,
        });
      });
    } else if (initialLastName === normalizedLName || !newLastName) {
      setOnPress(() => () => {
        Toast.show({
          type: 'error',
          text1: 'Please, enter your new surname',
          topOffset: 50,
        });
      });
    } else if (!normalizedFName) {
      setOnPress(() => () => {
        Toast.show({
          type: 'error',
          text1: "Please, don't use only spaces in name",
          topOffset: 50,
        });
      });
    } else if (!normalizedLName) {
      setOnPress(() => () => {
        Toast.show({
          type: 'error',
          text1: "Please, don't use only spaces in surname",
          topOffset: 50,
        });
      });
    } else {
      setOnPress(() => edit);
    }
  }, [
    edit,
    initialFirstName,
    initialLastName,
    normalizedFName,
    normalizedLName,
  ]);

  return (
    <TextButton
      containerStyle={styles.activeContainerStyle}
      labelStyle={styles.labelStyle}
      onPress={onPress}
      label="CONFIRM"
    />
  );
};

export default memo(ConfirmUsernameButton);
