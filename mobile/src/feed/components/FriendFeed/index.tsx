import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

// styles
import styles from './styles';

interface IFriendFeedComponentProps {}

const FriendFeedView: FC<IFriendFeedComponentProps> = () => {
  return (
    <View style={styles.friendFeedStyle}>
      <Text>Friend Feed Screen</Text>
    </View>
  );
};

export default memo(FriendFeedView);
