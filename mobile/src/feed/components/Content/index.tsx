import React, { FC, memo } from 'react';
import { TouchableOpacity, Text } from 'react-native';

// styles
import styles from './styles';

interface IContentViewProps {}

const ContentView: FC<IContentViewProps> = () => {
  return <TouchableOpacity style={styles.contentStyle}></TouchableOpacity>;
};

export default memo(ContentView);
