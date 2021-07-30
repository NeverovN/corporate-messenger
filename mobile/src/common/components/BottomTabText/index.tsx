import React, { FC, memo } from 'react';
import { Text } from 'react-native';

// styles
import styles from './styles';

interface ITabTextProps {
  text: string;
  focused: boolean;
}
const TabText: FC<ITabTextProps> = (props) => {
  const style = props.focused
    ? styles.focusedTextStyle
    : styles.unfocusedTextStyle;
  return <Text style={style}>{props.text}</Text>;
};

export default memo(TabText);
