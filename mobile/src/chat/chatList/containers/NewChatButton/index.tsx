import React, { FC, memo } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

// styles
import styles from './styles';

// hooks
import { useHandleNewChat } from 'chat/chatList/hooks/useHandleNewChat';

interface INewChatButtonContainerProps {}

const NewChatButtonContainer: FC<INewChatButtonContainerProps> = () => {
  const onPress = useHandleNewChat();

  return (
    <View style={styles.newChatButtonViewStyle}>
      <TouchableOpacity
        style={styles.newChatButtonTouchStyles}
        onPress={onPress}>
        <Text>New chat</Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(NewChatButtonContainer);
