import React, { FC, memo } from 'react';

// common components
import IconButton from '@/common/components/Button/IconButton';
import Icon from '@/common/components/Icon';

// styles
import styles from './styles';
import { IconType } from '@/common/types/styles';

interface IHeaderRightProps {
  isPost: boolean;
  create(): void;
}

const HeaderRightCreatePost: FC<IHeaderRightProps> = (props) => {
  if (props.isPost) {
    return (
      <IconButton
        icon="check"
        containerStyle={styles.activeIconStyle}
        iconType={IconType.LARGE}
        onPress={props.create}
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

export default memo(HeaderRightCreatePost);
