import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import styles from './styles';

// common components
import TextButton from 'common/components/Button/TextButton';

interface IStartChatButtonViewProps {
  onPress(): void;
}

const StartChatButtonView: FC<IStartChatButtonViewProps> = (props) => {
  return (
    <View style={styles.wrapperStyle}>
      <TextButton
        containerStyle={styles.chatButtonStyle}
        onPress={props.onPress}
        label="Chat"
      />
    </View>
  );
};

export default memo(StartChatButtonView);
