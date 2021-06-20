import React, { FC, memo, useEffect, useState } from 'react';

// common components
import IconButton from '@/common/components/Button/IconButton';
import Icon from '@/common/components/Icon';

// styles
import styles from './styles';
import { IconType } from '@/common/types/styles';

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

export default memo(HeaderRightPassword);
