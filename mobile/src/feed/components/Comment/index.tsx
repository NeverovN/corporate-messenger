import React, { FC, memo } from 'react';
import { View, Text, Image } from 'react-native';

// common components
import IconWithTextButton from '@/common/components/Button/IconWithTextButton';

import styles from './styles';

interface ICommentViewProps {
  content: string;
  authorName: string;
  authorAvatar: string;
  createdAt: string;
  likeCount: number;
  toggleLike(): void;
}

const CommentView: FC<ICommentViewProps> = (props) => {
  const likes = props.likeCount > 0 ? props.likeCount.toString() : '';
  return (
    // TODO: implement context menu

    <View style={styles.feedStyle}>
      <Image
        style={styles.userIconImageStyle}
        source={{ uri: props.authorAvatar }}
      />
      <View style={styles.textStyle}>
        <Text>{props.authorName}</Text>
        <Text>{props.content}</Text>
        <View style={styles.infoStyle}>
          <Text>{props.createdAt}</Text>
          <IconWithTextButton
            icon="heart"
            label={likes}
            labelStyle={styles.iconStyle}
            onPress={props.toggleLike}
          />
        </View>
      </View>
    </View>
  );
};

export default memo(CommentView);
