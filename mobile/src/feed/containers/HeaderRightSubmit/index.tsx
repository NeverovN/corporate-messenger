import React, { FC, memo } from 'react';

// common components
import IconButton from '@/common/components/Button/IconButton';
import Icon from '@/common/components/Icon';

// styles
import { useStyles } from './styles';
import { IconType } from '@/common/types/styles';

interface IHeaderRightProps {
  isValid: boolean;
  submit(): void;
}

const HeaderRightSubmit: FC<IHeaderRightProps> = (props) => {
  const styles = useStyles();
  if (props.isValid) {
    return (
      <IconButton
        icon="next"
        containerStyle={styles.activeIconStyle}
        iconType={IconType.LARGE}
        onPress={props.submit}
      />
    );
  }

  return (
    <Icon
      name="next"
      customStyle={styles.disabledIconStile}
      type={IconType.LARGE}
    />
  );
};

export default memo(HeaderRightSubmit);
