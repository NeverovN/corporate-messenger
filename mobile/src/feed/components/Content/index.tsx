import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

// styles
import styles from './styles';

interface IContentViewProps {
  text: string;
}

const ContentView: FC<IContentViewProps> = (props) => {
  return (
    <View style={styles.contentStyle}>
      <Text>{props.text}</Text>
    </View>
  );
};

export default memo(ContentView);
