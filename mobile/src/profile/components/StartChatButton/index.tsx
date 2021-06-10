import React, { FC, memo } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

// styles
import styles from './styles';

interface IStartChatButtonViewProps {
  onPress(): void;
}

const StartChatButtonView: FC<IStartChatButtonViewProps> = (props) => {
  return (
    <View style={styles.startChatButtonViewStyle}>
      <TouchableOpacity
        style={styles.startChatButtonTouchStyles}
        onPress={props.onPress}>
        <Text>Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(StartChatButtonView);
