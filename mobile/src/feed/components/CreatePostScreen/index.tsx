import React, { FC, memo } from 'react';
import { ScrollView, TextInput, View } from 'react-native';

// styles
import styles from './styles';

// colors
import COLORS from 'common/constants/colors';

interface ICreatePostScreenViewProps {
  textValue: string;
  onTextValueChange(val: string): void;
}

const CreatePostScreenView: FC<ICreatePostScreenViewProps> = (props) => {
  return (
    <View style={styles.backGround}>
      <ScrollView contentContainerStyle={styles.createPostScreenStyle}>
        <TextInput
          placeholder="WHATS UP?"
          placeholderTextColor={COLORS.secondaryInactive}
          style={styles.inputStyle}
          multiline={true}
          scrollEnabled={true}
          value={props.textValue}
          onChangeText={props.onTextValueChange}
        />
      </ScrollView>
    </View>
  );
};

export default memo(CreatePostScreenView);
