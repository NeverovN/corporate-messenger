import React, { FC, memo } from 'react';
import { View, TextInput } from 'react-native';

// styles
import styles from './styles';

// colors
import COLORS from 'common/constants/colors';

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
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.textInputStyle}
          value={props.comment}
          placeholder="Comment"
          placeholderTextColor={COLORS.secondaryInactive}
          onChangeText={props.onCommentChange}
          multiline={true}
        />
      </View>
      <IconButton
        icon="send"
        iconType={IconType.LARGE}
        onPress={props.onCommentSend}
      />
    </View>
  );
};

export default memo(CommentInputView);
