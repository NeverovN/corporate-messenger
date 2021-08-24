import React, { FC, memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';

// styles
import { useStyles } from './styles';

interface IChatTitleViewProps {
  image: string | null;
  chatTitle: string;
  memberCount?: number;
  isDialog: boolean;
  onPress(): void;
}

const ChatTitleView: FC<IChatTitleViewProps> = (props) => {
  const styles = useStyles();
  return (
    <TouchableOpacity style={styles.headerStyle} onPress={props.onPress}>
      {props.image ? (
        <FastImage style={styles.imageStyle} source={{ uri: props.image }} />
      ) : (
        <FastImage
          style={styles.imageStyle}
          source={require('common/assets/images/defaultAvatar.png')}
        />
      )}
      <View style={styles.wrapperStyle}>
        <Text style={styles.titleTextStyle}>{props.chatTitle}</Text>
        {props.isDialog ? null : (
          <Text style={styles.membersTextStyle}>
            {props.memberCount} MEMBERS
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default memo(ChatTitleView);
