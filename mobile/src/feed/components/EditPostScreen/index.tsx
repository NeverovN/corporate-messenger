import React, { FC, memo } from 'react';
import { ScrollView, TextInput } from 'react-native';

// styles
import { useStyles } from './styles';

interface IEditPostScreenViewProps {
  textValue: string | null;
  onTextValueChange(val: string): void;

  mediaValue: string[] | null;
  onMediaValueChange(val: string[]): void;
}

const EditPostScreenView: FC<IEditPostScreenViewProps> = (props) => {
  const styles = useStyles();
  return (
    <ScrollView contentContainerStyle={styles.editPostScreenStyle}>
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

export default memo(EditPostScreenView);
