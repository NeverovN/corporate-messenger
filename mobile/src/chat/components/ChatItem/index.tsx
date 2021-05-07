import React, { FC, memo } from 'react';
import { TouchableOpacity } from 'react-native';

// styles
import styles from './styles';

// components

export interface IChatItemViewProps {
  onPress(): void;
}

const ChatItemView: FC<IChatItemViewProps> = (props) => {
  return (
    <TouchableOpacity
      style={styles.chatItemStyle}
      activeOpacity={0.7}
      onPress={props.onPress}
    />
  );
};

export default memo(ChatItemView);
