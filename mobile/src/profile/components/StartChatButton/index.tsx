import React, { FC, memo } from 'react';
import { View } from 'react-native';

// styles
import { useStyles } from './styles';

// common components
import TextButton from 'common/components/Button/TextButton';

interface IStartChatButtonViewProps {
  onPress(): void;
}

const StartChatButtonView: FC<IStartChatButtonViewProps> = (props) => {
  const styles = useStyles();
  return (
    <View style={styles.wrapperStyle}>
      <TextButton
        containerStyle={styles.chatButtonStyle}
        labelStyle={styles.labelStyle}
        onPress={props.onPress}
        label="Chat"
      />
    </View>
  );
};

export default memo(StartChatButtonView);
