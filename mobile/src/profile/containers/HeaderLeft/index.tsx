import React, { FC, memo } from 'react';

// styles
import { useStyles } from './styles';

// common components
import IconButton from '@/common/components/Button/IconButton';

// hooks
import { useSearchNavigation } from 'profile/hooks/useSearchNavigation';

interface IHeaderLeftContainerProps {}

const HeaderLeft: FC<IHeaderLeftContainerProps> = () => {
  const navigate = useSearchNavigation();
  const styles = useStyles();

  return (
    <IconButton icon="search" onPress={navigate} iconStyle={styles.iconStyle} />
  );
};

export default memo(HeaderLeft);
