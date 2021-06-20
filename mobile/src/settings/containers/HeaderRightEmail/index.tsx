import React, { FC, memo, useEffect, useState } from 'react';

// common components
import IconButton from '@/common/components/Button/IconButton';
import Icon from '@/common/components/Icon';

// styles
import styles from './styles';
import { IconType } from '@/common/types/styles';

interface IHeaderProps {
  initialValue: string;
  currentState: string;
  edit(): void;
}

const HeaderRightEmail: FC<IHeaderProps> = ({
  initialValue,
  currentState,
  edit,
}) => {
  const [isChanged, setIsChanged] = useState<boolean>(false);

  useEffect(() => {
    if (initialValue === currentState) {
      setIsChanged(false);
    } else {
      setIsChanged(true);
    }
  }, [currentState, initialValue]);

  if (isChanged) {
    return (
      <IconButton
        containerStyle={styles.activeIconStyle}
        onPress={edit}
        iconType={IconType.LARGE}
        icon="check"
      />
    );
  }

  return (
    <Icon
      name="check"
      customStyle={styles.disabledIconStile}
      type={IconType.LARGE}
    />
  );
};

export default memo(HeaderRightEmail);
