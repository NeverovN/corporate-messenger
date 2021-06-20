import React, { FC, memo, useEffect, useState } from 'react';

// common components
import IconButton from '@/common/components/Button/IconButton';
import Icon from '@/common/components/Icon';

// styles
import styles from './styles';
import { IconType } from '@/common/types/styles';

interface IHeaderProps {
  initialNames: [string, string];
  newNames: [string, string];
  edit(): void;
}

const HeaderRightUsername: FC<IHeaderProps> = ({
  initialNames,
  newNames,
  edit,
}) => {
  const [initialFirstName, initialLastName] = initialNames;
  const [newFirstName, newLastName] = newNames;
  const [isChanged, setIsChanged] = useState<boolean>(false);

  useEffect(() => {
    if (initialFirstName === newFirstName && initialLastName === newLastName) {
      setIsChanged(false);
    } else {
      setIsChanged(true);
    }
  }, [initialFirstName, initialLastName, newFirstName, newLastName]);

  if (isChanged) {
    return (
      <IconButton
        icon="check"
        containerStyle={styles.activeIconStyle}
        onPress={edit}
        iconType={IconType.LARGE}
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

export default memo(HeaderRightUsername);
