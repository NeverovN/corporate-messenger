import React, { FC, memo } from 'react';

// common components
import IconButton from '@/common/components/Button/IconButton';

// styles
import { useStyles } from './styles';

// hooks
import { useSettingsNavigation } from 'profile/hooks/useSettingsNavigation';

interface IHeaderRightContainerProps {}

const HeaderRight: FC<IHeaderRightContainerProps> = () => {
  const styles = useStyles();
  const navigate = useSettingsNavigation();

  return (
    <IconButton
      icon="settings2"
      iconStyle={styles.iconStyle}
      onPress={navigate}
    />
  );
};

export default memo(HeaderRight);
