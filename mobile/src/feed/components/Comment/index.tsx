import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';
import { Image } from 'react-native-elements/dist/image/Image';

import styles from './styles';

interface ICommentViewProps {
  content: string;
  authorName: string;
  authorAvatar: string;
  createdAt: string;
}

const CommentView: FC<ICommentViewProps> = (props) => {
  return (
    <View style={styles.feedStyle}>
      <Image
        style={styles.userIconImageStyle}
        source={{ uri: props.authorAvatar }}
      />
      <View>
        <Text>{props.authorName}</Text>
        <Text>{props.content}</Text>
        <Text>{props.createdAt}</Text>
      </View>
    </View>
  );
};

export default memo(CommentView);
