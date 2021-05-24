import React, { FC, memo } from 'react';
import { View, Text, Button } from 'react-native';

// styles
import styles from './styles';

interface IFriendFeedComponentProps {}

const FriendFeedView: FC<IFriendFeedComponentProps> = () => {
  return (
    <View style={styles.friendFeedStyle}>
      <Text>Friend Feed Screen</Text>
      <Button title="" onPress={() => {}} />
    </View>
  );
};

export default memo(FriendFeedView);
