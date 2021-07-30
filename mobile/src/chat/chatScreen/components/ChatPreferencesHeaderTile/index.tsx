import React, { FC, memo } from 'react';
import { View, Text, Image, TextInput } from 'react-native';

import styles from './styles';

// common components
import IconWithTextButton from 'common/components/Button/IconWithTextButton';
import TextButton from 'common/components/Button/TextButton';

interface IChatPreferencesHeaderTileViewProps {
  image: string | null;
  chatTitle: string;
  memberCount?: number;
  isDialog: boolean;
  onChatTitleChange(chatTitle: string): void;

  onChangePhotoPress(): void;
  onLeavePress(): void;
  onClearHistoryPress(): void;
}

const ChatPreferencesHeaderTile: FC<IChatPreferencesHeaderTileViewProps> = (
  props,
) => {
  return (
    <View style={styles.componentStyle}>
      <View style={styles.tileStyle}>
        <View style={styles.imagePartViewStyle}>
          {props.image ? (
            <Image style={styles.imageStyle} source={{ uri: props.image }} />
          ) : (
            <Image
              style={styles.imageStyle}
              source={require('common/assets/images/defaultAvatar.png')}
            />
          )}
          <IconWithTextButton
            onPress={props.onChangePhotoPress}
            icon="plus"
            label="CHANGE PHOTO"
            labelStyle={styles.changePhotoLabelStyle}
          />
        </View>

        <View style={styles.inputPartViewStyle}>
          <Text style={styles.titleTextStyle}>TITLE</Text>
          <View style={styles.inputWrapperStyle}>
            <TextInput
              style={styles.inputStyle}
              value={props.chatTitle}
              onChangeText={props.onChatTitleChange}
            />
          </View>
          <IconWithTextButton
            icon="clip"
            label="ATTACHMENTS"
            labelStyle={styles.changePhotoLabelStyle}
            containerStyle={styles.attachmentsButtonContainerStyle}
          />
          <View style={styles.manageButtonsViewStyle}>
            <TextButton
              label="LEAVE"
              labelStyle={styles.changePhotoLabelStyle}
              onPress={props.onLeavePress}
              containerStyle={styles.textButtonContainerStyle}
            />
            <View style={styles.separator} />
            <TextButton
              label="CLEAR"
              labelStyle={styles.changePhotoLabelStyle}
              onPress={props.onClearHistoryPress}
              containerStyle={styles.textButtonContainerStyle}
            />
          </View>
        </View>
      </View>
      {props.isDialog ? null : (
        <Text style={styles.membersTextStyle}>{props.memberCount} MEMBERS</Text>
      )}
    </View>
  );
};

export default memo(ChatPreferencesHeaderTile);
