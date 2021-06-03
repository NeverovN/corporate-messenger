import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import styles from './styles';

// containers
import TopBarText from 'chat/chatList/containers/TopBarText';
import TopBarButtons from 'chat/chatList/containers/TopBarButtons';

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
