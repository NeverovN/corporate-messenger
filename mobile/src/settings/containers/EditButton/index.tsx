import React, { FC, memo } from 'react';

// common components
import TextButton from '@/common/components/Button/TextButton';

// styles
import styles from './styles';

// hooks
import { useHandleEditNavigation } from 'settings/hooks/useHandleEditNavigation';

// constants
import Operations from '@/settings/constants/operations';

interface IEditButtonContainerProps {
  screen: Operations;
  title: string;
}

const EditButtonContainer: FC<IEditButtonContainerProps> = (props) => {
  const navigate = useHandleEditNavigation(props.screen);

  return (
    <TextButton
      containerStyle={styles.editButtonViewStyle}
      onPress={navigate}
      label={props.title}
      labelStyle={styles.labelStyle}
    />
  );
};

export default memo(EditButtonContainer);
