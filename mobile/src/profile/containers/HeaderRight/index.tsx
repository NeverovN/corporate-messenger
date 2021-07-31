import React, { FC, memo } from 'react';

// common components
import IconButton from '@/common/components/Button/IconButton';

// styles
import styles from './styles';

// colors
import COLORS from 'common/constants/colors';

// hooks
import { useSettingsNavigation } from 'profile/hooks/useSettingsNavigation';

interface IHeaderRightContainerProps {}

const HeaderRight: FC<IHeaderRightContainerProps> = () => {
  const navigate = useSettingsNavigation();

  return (
    <IconButton
      icon="settings2"
      containerStyle={styles.headerRightStyle}
      iconStyle={styles.iconStyle}
      iconColor={COLORS.secondary}
      onPress={navigate}
    />
  );
};

export default memo(HeaderRight);
