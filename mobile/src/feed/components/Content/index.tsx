import React, { FC, memo } from 'react';
import { TouchableOpacity } from 'react-native';

// styles
import styles from './styles';

interface IContentViewProps {}

const ContentView: FC<IContentViewProps> = () => {
  return <TouchableOpacity style={styles.contentStyle} />;
};

export default memo(ContentView);
