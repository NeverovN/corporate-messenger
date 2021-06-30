import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface ICommentViewProps {
  text: string;
}

const CommentView: FC<ICommentViewProps> = (props) => {
  return (
    <View style={styles.feedStyle}>
      <Text>{props.text}</Text>
    </View>
  );
};

export default memo(CommentView);
