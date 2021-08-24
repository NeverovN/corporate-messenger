import React, { FC, memo } from 'react';

import { ButtonType } from '@/common/types/styles';

import IconButton, { IIconButtonProps } from './IconButton';
import TextButton, { ITextButtonProps } from './TextButton';
import IconWithTextButton, {
  IIconWithTextButtonProps,
} from './IconWithTextButton';

interface IGeneralTextButtonProps extends ITextButtonProps {
  type: ButtonType.TEXT;
}

interface IGeneralIconButtonProps extends IIconButtonProps {
  type: ButtonType.ICON;
}

interface IGeneralIconWithTextButtonProps extends IIconWithTextButtonProps {
  type: ButtonType.ICON_WITH_TEXT;
}

type ButtonProps =
  | IGeneralTextButtonProps
  | IGeneralIconButtonProps
  | IGeneralIconWithTextButtonProps;

const Button: FC<ButtonProps> = (props) => {
  if (props.type === ButtonType.ICON) {
    return <IconButton {...props} />;
  }

  if (props.type === ButtonType.TEXT) {
    return <TextButton {...props} />;
  }

  if (props.type === ButtonType.ICON_WITH_TEXT) {
    return <IconWithTextButton {...props} />;
  }

  return null;
};

export default memo(Button);
