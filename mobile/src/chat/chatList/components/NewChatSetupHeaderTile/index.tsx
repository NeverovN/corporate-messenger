import React, { FC, memo } from 'react';
import { View, Text, TextInput } from 'react-native';
import FastImage from 'react-native-fast-image';

import { useStyles } from './styles';

// common components
import IconWithTextButton from 'common/components/Button/IconWithTextButton';
import { useTheme } from 'react-native-stylex';

interface INewChatSetupHeaderTileViewProps {
  image: string | null;
  chatTitle: string;
  memberCount: number;
  onChatTitleChange(chatTitle: string): void;

  onChangePhotoPress(): void;
}

const NewChatSetupHeaderTileView: FC<INewChatSetupHeaderTileViewProps> = (
  props,
) => {
  const styles = useStyles();
  const { palette } = useTheme();
  return (
    <View style={styles.componentStyle}>
      <View style={styles.tileStyle}>
        {props.image ? (
          <FastImage style={styles.imageStyle} source={{ uri: props.image }} />
        ) : (
          <FastImage
            style={styles.imageStyle}
            source={require('common/assets/images/defaultAvatar.png')}
          />
        )}

        <View style={styles.inputPartViewStyle}>
          <Text style={styles.titleTextStyle}>TITLE</Text>
          <View style={styles.inputWrapperStyle}>
            <TextInput
              placeholder="TITLE"
              placeholderTextColor={palette.secondaryInactive}
              style={styles.inputStyle}
              value={props.chatTitle}
              onChangeText={props.onChatTitleChange}
            />
          </View>
        </View>
      </View>
      <Text style={styles.membersTextStyle}>{props.memberCount} MEMBERS</Text>
    </View>
  );
};

export default memo(NewChatSetupHeaderTileView);
