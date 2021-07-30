import React, { FC, memo } from 'react';

// common components
import IconButton from '@/common/components/Button/IconButton';

// styles
import styles from './styles';

// types
import { IconType } from '@/common/types/styles';

// hooks
import { useSettingsNavigation } from 'profile/hooks/useSettingsNavigation';

interface IHeaderRightContainerProps {}

const HeaderRight: FC<IHeaderRightContainerProps> = () => {
  const navigate = useSettingsNavigation();

  return (
    <IconButton
      icon="settings"
      containerStyle={styles.headerRightStyle}
      iconType={IconType.LARGE}
      onPress={navigate}
    />
  );
};

export default memo(HeaderRight);
