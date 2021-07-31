import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface IChatInfoViewProps {
  chatTitle: string;
  lastMessage: string; // string for now
}

const ChatInfoView: FC<IChatInfoViewProps> = (props) => {
  return (
    <View style={styles.chatInfoViewStyle}>
      <Text style={styles.primaryTextStyle}>{props.chatTitle} </Text>
      <Text style={styles.secondaryTextStyle}>{props.lastMessage}</Text>
    </View>
  );
};

export default memo(ChatInfoView);
