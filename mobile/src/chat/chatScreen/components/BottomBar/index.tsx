import React, { FC, memo } from 'react';
import { View, TextInput } from 'react-native';

import IconButton from 'common/components/Button/IconButton';

import styles from './styles';

interface IBottomBarViewProps {
  onEmojiPress(): void;
  onClipPress(): void;
  onSendPress(): void;
  value: string;
  onValueChange(message: string): void;
}

const BottomBarView: FC<IBottomBarViewProps> = (props) => {
  return (
    <View style={styles.bottomBarStyle}>
      <IconButton
        icon="paperclip" // I don't understand, why it does not work
        onPress={props.onEmojiPress}
        containerStyle={{ ...styles.commonStyle }}
      />
      <TextInput
        style={styles.textInputStyle}
        placeholder="Message"
        value={props.value}
        onChangeText={props.onValueChange}
      />
      <IconButton
        icon="paperclip"
        onPress={props.onClipPress}
        containerStyle={{ ...styles.commonStyle }}
      />
      <IconButton
        icon="paper-plane"
        onPress={props.onSendPress}
        containerStyle={{ ...styles.commonStyle }}
      />
    </View>
  );
};

export default memo(BottomBarView);
