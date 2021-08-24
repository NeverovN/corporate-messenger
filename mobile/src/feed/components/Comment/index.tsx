import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';

// common components
import IconWithTextButton from '@/common/components/Button/IconWithTextButton';

// styles
import { useStyles } from './styles';

// types
import { IconName } from '@/common/types/iconNames';
import { useTheme } from 'react-native-stylex';

interface ICommentViewProps {
  content: string;
  authorName: string;
  authorAvatar: string | null;
  createdAt: string;
  likeCount: number;
  liked: boolean;
  toggleLike(): void;
}

const CommentView: FC<ICommentViewProps> = (props) => {
  const styles = useStyles();
  const { palette } = useTheme();
  const likes = props.likeCount > 0 ? props.likeCount.toString() : '';
  const icon: IconName = props.liked ? 'liked' : 'unliked';
  return (
    <View style={styles.feedStyle}>
      {props.authorAvatar ? (
        <FastImage
          style={styles.userIconImageStyle}
          source={{ uri: props.authorAvatar }}
        />
      ) : (
        <FastImage
          style={styles.userIconImageStyle}
          source={require('common/assets/images/defaultAvatar.png')}
        />
      )}
      <View style={styles.textWrapperStyle}>
        <Text style={styles.secondaryTextStyle}>{props.authorName}</Text>
        <Text style={styles.primaryTextStyle}>{props.content}</Text>
        <View style={styles.infoStyle}>
          <Text style={styles.minorTextStyle}>{props.createdAt}</Text>
          <IconWithTextButton
            icon={icon}
            label={likes}
            labelStyle={styles.iconStyle}
            onPress={props.toggleLike}
            iconColor={palette.secondary}
          />
        </View>
      </View>
    </View>
  );
};

export default memo(CommentView);
