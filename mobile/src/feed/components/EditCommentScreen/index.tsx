import React, { FC, memo } from 'react';
import { ScrollView, TextInput } from 'react-native';

// styles
import { useStyles } from './styles';

interface IEditCommentScreenViewProps {
  textValue: string | null;
  onTextValueChange(val: string): void;
}

const EditCommentScreenView: FC<IEditCommentScreenViewProps> = (props) => {
  const styles = useStyles();
  return (
    <ScrollView contentContainerStyle={styles.editCommentScreenStyle}>
      <TextInput
        style={styles.inputStyle}
        multiline={true}
        scrollEnabled={true}
        value={props.textValue || ''}
        onChangeText={props.onTextValueChange}
      />
    </ScrollView>
  );
};

export default memo(EditCommentScreenView);
