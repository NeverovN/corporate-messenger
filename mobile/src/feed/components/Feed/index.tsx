import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface IFeedComponentProps {}

const FeedView: FC<IFeedComponentProps> = () => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default memo(FeedView);
