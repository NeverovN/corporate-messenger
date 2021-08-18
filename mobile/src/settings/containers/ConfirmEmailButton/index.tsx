import React, { FC, memo, useEffect, useState } from 'react';

// common components
import TextButton from '@/common/components/Button/TextButton';

// styles
import { useStyles } from './styles';
import Toast from 'react-native-toast-message';

interface IButtonProps {
  initialValue: string;
  currentState: string;
  edit(): void;
}

const ConfirmEmailButton: FC<IButtonProps> = ({
  initialValue,
  currentState,
  edit,
}) => {
  const styles = useStyles();
  const [onPress, setOnPress] = useState<() => void>(() => {});

  useEffect(() => {
    if (initialValue === currentState || currentState === '') {
      setOnPress(() => () =>
        Toast.show({
          type: 'error',
          text1: 'Please, enter your new email',
          topOffset: 50,
        }),
      );
    } else {
      setOnPress(() => edit);
    }
  }, [currentState, edit, initialValue]);

  return (
    <TextButton
      label="CONFIRM"
      labelStyle={styles.labelStyle}
      containerStyle={styles.inactiveContainerStyle}
      onPress={onPress}
    />
  );
};

export default memo(ConfirmEmailButton);
