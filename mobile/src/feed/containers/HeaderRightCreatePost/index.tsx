import React, { FC, memo } from 'react';

// common components
import IconButton from '@/common/components/Button/IconButton';
import Icon from '@/common/components/Icon';

// styles
import styles from './styles';
import { Post } from '@/common/types/gql.generated';
import { IconType } from '@/common/types/styles';

interface IHeaderRightProps {
  post: Post | null;
  create(): void;
}

const HeaderRightCreatePost: FC<IHeaderRightProps> = (props) => {
  if (props.post) {
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
