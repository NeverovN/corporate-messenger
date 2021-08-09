import React, { FC, memo } from 'react';
import { Text } from 'react-native';

// styles
import { useStyles } from './styles';

interface ITabTextProps {
  text: string;
  focused: boolean;
}
const TabText: FC<ITabTextProps> = (props) => {
  const styles = useStyles();
  const textStyle = props.focused
    ? styles.focusedTextStyle
    : styles.unfocusedTextStyle;
  return <Text style={textStyle}>{props.text}</Text>;
};

export default memo(TabText);
