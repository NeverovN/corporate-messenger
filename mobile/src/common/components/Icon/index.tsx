import React, { FC, memo } from 'react';
import { TextStyle } from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../../selection.json';
const CustomIcon = createIconSetFromIcoMoon(icoMoonConfig);

// types
import { IconType } from '@/common/types/styles';
import { IconName } from '../../types/iconNames';

// consts
import COLORS from '@/common/constants/colors';

// styles
import iconStyles from './styles';

interface IIconProps {
  name: IconName;
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

  return <CustomIcon color={iconColor} name={props.name} style={style} />;
};

export default memo(Icon);
