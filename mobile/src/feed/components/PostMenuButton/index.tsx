import React, { FC, memo } from 'react';

// styles
import styles from './styles';

// common components
import Icon from 'common/components/Icon';
import { IconType } from '@/common/types/styles';

interface IPostMenuButtonViewProps {}

const PostMenuButtonView: FC<IPostMenuButtonViewProps> = () => {
  return (
    <Icon name="more" type={IconType.LARGE} customStyle={styles.iconStyle} />
  );
};

export default memo(PostMenuButtonView);
