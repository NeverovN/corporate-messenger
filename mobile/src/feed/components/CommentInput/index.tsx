import React, { FC, memo } from 'react';
import { View, TextInput } from 'react-native';

// styles
import { useStyles } from './styles';

// common components
import IconButton from 'common/components/Button/IconButton';
import { IconType } from '@/common/types/styles';
import { useTheme } from 'react-native-stylex';

interface ICommentInputViewProps {
  comment: string;
  onCommentChange(comment: string): void;

  onCommentSend(): void;
}

const CommentInputView: FC<ICommentInputViewProps> = (props) => {
  const styles = useStyles();
  const { palette } = useTheme();
  return (
    <View style={styles.wrapperStyle}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.textInputStyle}
          value={props.comment}
          placeholder="Comment"
          placeholderTextColor={palette.secondaryInactive}
          onChangeText={props.onCommentChange}
          multiline={true}
        />
      </View>
      <IconButton
        icon="send"
        iconType={IconType.LARGE}
        iconColor={palette.secondary}
        onPress={props.onCommentSend}
      />
    </View>
  );
};

export default memo(CommentInputView);
