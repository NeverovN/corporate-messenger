import React, { FC, memo } from 'react';

// common components
import Icon from 'common/components/Icon';
import { IconType } from '@/common/types/styles';

interface IPostMenuButtonViewProps {}

const PostMenuButtonView: FC<IPostMenuButtonViewProps> = () => {
  return <Icon name="more" type={IconType.LARGE} />;
};

export default memo(PostMenuButtonView);
