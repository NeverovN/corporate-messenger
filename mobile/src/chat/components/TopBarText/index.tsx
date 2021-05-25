import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

// styles
import styles from './styles';

interface ITopBarTextViewProps {
  text: string;
}

const TopBarTextView: FC<ITopBarTextViewProps> = (props) => {
  return (
    <View style={styles.topBarTextStyle}>
      <Text>{props.text}</Text>
    </View>
  );
};

export default memo(TopBarTextView);
