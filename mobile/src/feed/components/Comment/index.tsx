import React, { FC, memo } from 'react';
import { View, Text, Image } from 'react-native';

// common components
import IconWithTextButton from '@/common/components/Button/IconWithTextButton';

// styles
import styles from './styles';

// consts
import COLORS from '@/common/constants/colors';

interface ICommentViewProps {
  content: string;
  authorName: string;
  authorAvatar: string;
  createdAt: string;
  likeCount: number;
  liked: boolean;
  toggleLike(): void;
}

const CommentView: FC<ICommentViewProps> = (props) => {
  const likes = props.likeCount > 0 ? props.likeCount.toString() : '';
  const iconColor = props.liked ? COLORS.red : COLORS.black;
  return (
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
            iconColor={iconColor}
          />
        </View>
      </View>
    </View>
  );
};

export default memo(CommentView);
