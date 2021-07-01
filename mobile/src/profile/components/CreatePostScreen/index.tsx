import React, { FC, memo } from 'react';
import { ScrollView, TextInput } from 'react-native';

// styles
import styles from './styles';

interface ICreatePostScreenViewProps {
  textValue: string;
  onTextValueChange(val: string): void;
}

const CreatePostScreenView: FC<ICreatePostScreenViewProps> = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.createPostScreenStyle}>
      <TextInput
        style={styles.inputStyle}
        multiline={true}
        scrollEnabled={true}
        value={props.textValue}
        onChangeText={props.onTextValueChange}
      />
    </ScrollView>
  );
};

export default memo(CreatePostScreenView);
