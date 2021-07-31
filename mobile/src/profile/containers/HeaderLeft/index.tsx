import React, { FC, memo } from 'react';

// styles
import styles from './styles';

// colors
import COLORS from 'common/constants/colors';

// common components
import IconButton from '@/common/components/Button/IconButton';

// hooks
import { useSearchNavigation } from 'profile/hooks/useSearchNavigation';

interface IHeaderLeftContainerProps {}

const HeaderLeft: FC<IHeaderLeftContainerProps> = () => {
  const navigate = useSearchNavigation();

  return (
    <IconButton
      icon="search"
      onPress={navigate}
      containerStyle={styles.headerLeftStyle}
      iconStyle={styles.iconStyle}
      iconColor={COLORS.secondary}
    />
  );
};

export default memo(HeaderLeft);
