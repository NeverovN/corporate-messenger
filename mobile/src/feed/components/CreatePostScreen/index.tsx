import React, { FC, memo } from 'react';
import { ScrollView, TextInput, View } from 'react-native';
import { useTheme } from 'react-native-stylex';

// styles
import { useStyles } from './styles';

interface ICreatePostScreenViewProps {
  textValue: string;
  onTextValueChange(val: string): void;
}

const CreatePostScreenView: FC<ICreatePostScreenViewProps> = (props) => {
  const styles = useStyles();
  const { palette } = useTheme();
  return (
    <View style={styles.backGround}>
      <ScrollView contentContainerStyle={styles.createPostScreenStyle}>
        <TextInput
          placeholder="WHATS UP?"
          placeholderTextColor={palette.secondaryInactive}
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
