import React, { FC, memo, useEffect, useState } from 'react';

// common components
import TextButton from '@/common/components/Button/TextButton';

// styles
import { useStyles } from './styles';
import { Alert } from 'react-native';

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
  const [isChanged, setIsChanged] = useState<boolean>(false);

  useEffect(() => {
    if (initialValue === currentState || currentState === '') {
      setIsChanged(false);
    } else {
      setIsChanged(true);
    }
  }, [currentState, initialValue]);

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
      onPress={() => Alert.alert('Error', 'Please enter email')}
    />
  );
};

export default memo(ConfirmEmailButton);
