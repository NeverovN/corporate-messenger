import React, { FC, memo } from 'react';
import { TouchableOpacity, Text } from 'react-native';

// styles
import styles from './styles';

interface IContentViewProps {
  text: string;
}

const ContentView: FC<IContentViewProps> = (props) => {
  return (
    <TouchableOpacity style={styles.contentStyle}>
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default memo(ContentView);
