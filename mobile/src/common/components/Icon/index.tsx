import React, { FC, memo } from 'react';
import { TextStyle } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

// types
import { IconType } from '@/common/types/styles';

// consts
import COLORS from '@/common/constants/colors';

// styles
import iconStyles from './styles';

interface IIconProps {
  name: string;
  type?: IconType;
  color?: string;
  // color?: string; // prop gives warning
  customStyle?: TextStyle;
}

const Icon: FC<IIconProps> = (props) => {
  const iconType = props.type || IconType.MEDIUM;
  const iconColor = props.color || COLORS.black;
  const customStyle = props.customStyle || {};
  // const color = props.color || '';

  const style: TextStyle = {
    ...iconStyles[iconType],
    ...customStyle,
    // color,
  };

  return <FontAwesomeIcon color={iconColor} name={props.name} style={style} />;
};

export default memo(Icon);
