import React, { FC, memo } from 'react';
import { View, Text, Image, TextInput } from 'react-native';

import styles from './styles';

// colors
import COLORS from 'common/constants/colors';

// common components
import IconWithTextButton from 'common/components/Button/IconWithTextButton';

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
  return (
    <View style={styles.componentStyle}>
      <View style={styles.tileStyle}>
        {props.image ? (
          <Image style={styles.imageStyle} source={{ uri: props.image }} />
        ) : (
          <Image
            style={styles.imageStyle}
            source={require('common/assets/images/defaultAvatar.png')}
          />
        )}

        <View style={styles.inputPartViewStyle}>
          <Text style={styles.titleTextStyle}>TITLE</Text>
          <View style={styles.inputWrapperStyle}>
            <TextInput
              placeholder="TITLE"
              placeholderTextColor={COLORS.secondaryInactive}
              style={styles.inputStyle}
              value={props.chatTitle}
              onChangeText={props.onChatTitleChange}
            />
          </View>
          <IconWithTextButton
            onPress={props.onChangePhotoPress}
            icon="plus"
            label="CHANGE PHOTO"
            labelStyle={styles.changePhotoLabelStyle}
          />
        </View>
      </View>
      <Text style={styles.membersTextStyle}>{props.memberCount} MEMBERS</Text>
    </View>
  );
};

export default memo(NewChatSetupHeaderTileView);
