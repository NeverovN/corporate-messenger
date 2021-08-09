import React, { FC, memo } from 'react';
import { TextStyle } from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../../../selection.json';
const CustomIcon = createIconSetFromIcoMoon(icoMoonConfig);

// types
import { IconType } from '@/common/types/styles';
import { IconName } from '../../types/iconNames';

// styles
import iconStyles from './styles';
import { useTheme } from 'react-native-stylex';

interface IIconProps {
  name: IconName;
  type?: IconType;
  color?: string;
  customStyle?: TextStyle;
}

const Icon: FC<IIconProps> = (props) => {
  const { palette } = useTheme();
  const iconType = props.type || IconType.MEDIUM;
  const iconColor = props.color || palette.secondary;
  const customStyle = props.customStyle || {};

  const style: TextStyle = {
    ...iconStyles[iconType],
    ...customStyle,
  };

  return <CustomIcon color={iconColor} name={props.name} style={style} />;
};

export default memo(Icon);
