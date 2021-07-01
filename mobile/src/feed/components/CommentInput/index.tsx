import React, { FC, memo } from 'react';
import { View, TextInput } from 'react-native';

// styles
import styles from './styles';

// common components
import IconButton from 'common/components/Button/IconButton';
import { IconType } from '@/common/types/styles';

interface ICommentInputViewProps {
  comment: string;
  onCommentChange(comment: string): void;

  onCommentSend(): void;
}

const CommentInputView: FC<ICommentInputViewProps> = (props) => {
  return (
    <View style={styles.wrapperStyle}>
      <TextInput
        style={styles.textInputStyle}
        value={props.comment}
        placeholder="enter your comment"
        onChangeText={props.onCommentChange}
      />
      <IconButton
        icon="paper-plane"
        iconType={IconType.MEDIUM}
        onPress={props.onCommentSend}
      />
    </View>
  );
};

export default memo(CommentInputView);
