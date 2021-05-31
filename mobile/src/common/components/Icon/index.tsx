import React, { FC, memo } from 'react';
import { TextStyle } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import { IconType } from '@/common/types/styles';

import iconStyles from './styles';

interface IIconProps {
  name: string;
  type?: IconType;
  color?: string;
  customStyle?: TextStyle;
}

const Icon: FC<IIconProps> = (props) => {
  const iconType = props.type || IconType.MEDIUM;
  const customStyle = props.customStyle || {};
  const color = props.color || '';

  const style: TextStyle = {
    ...iconStyles[iconType],
    ...customStyle,
    color,
  };

  return <FontAwesomeIcon name={props.name} style={style} />;
};

export default memo(Icon);
