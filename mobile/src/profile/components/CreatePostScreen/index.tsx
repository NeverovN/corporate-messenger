import React, { FC, memo } from 'react';
import {
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

// styles
import styles from './styles';

interface ICreatePostScreenViewProps {}

const CreatePostScreenView: FC<ICreatePostScreenViewProps> = () => {
  return (
    <ScrollView contentContainerStyle={styles.createPostScreenStyle}>
      <TextInput
        style={styles.inputStyle}
        multiline={true}
        scrollEnabled={true}
      />
    </ScrollView>
  );
};

export default memo(CreatePostScreenView);
