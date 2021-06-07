import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import styles from './styles';

// containers
import TopBarText from '@/chat/containers/TopBarText';
import TopBarButtons from '@/chat/containers/TopBarButtons';

interface ITopBarViewProps {}

const TopBarView: FC<ITopBarViewProps> = () => {
  return (
    <View style={styles.topBarStyle}>
      <TopBarText />
      <TopBarButtons />
    </View>
  );
};

export default memo(TopBarView);
