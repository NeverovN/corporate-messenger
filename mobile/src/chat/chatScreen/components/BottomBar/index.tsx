import React, { FC, memo } from 'react';
import {
  View,
  TextInput,
  Image,
  FlatList,
  ListRenderItem,
  ImageStyle,
} from 'react-native';

// common components
import IconButton from 'common/components/Button/IconButton';

// colors
import COLORS from 'common/constants/colors';

import styles from './styles';
import { Image as ImageType } from 'react-native-image-crop-picker';
import { IconType } from '@/common/types/styles';

interface IBottomBarViewProps {
  onEmojiPress(): void;
  onClipPress(): void;
  onSendPress(): void;
  message: string | null;
  media: ImageType[] | null;
  onValueChange(message: string): void;
}

const renderImage: ListRenderItem<{ style: ImageStyle; source: string }> = ({
  item,
  index,
}) => {
  return <Image key={index} style={item.style} source={{ uri: item.source }} />;
};

const keyExtractor = () => Math.random().toString();

const BottomBarView: FC<IBottomBarViewProps> = (props) => {
  const imagesToRender = props.media
    ? props.media.map((img) => {
        const base64Encoded = img.data;
        return {
          style: styles.imageStyle,
          source: `data:image/png;base64,${base64Encoded}`,
        };
      })
    : null;

  return (
    <View>
      {imagesToRender ? (
        <FlatList
          keyExtractor={keyExtractor}
          style={styles.imageViewer}
          horizontal={true}
          data={imagesToRender}
          renderItem={renderImage}
        />
      ) : null}
      <View style={styles.bottomBarStyle}>
        <IconButton
          icon="emoji"
          onPress={props.onEmojiPress}
          containerStyle={styles.commonStyle}
          iconType={IconType.LARGE}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholder="MESSAGE"
          value={props.message || ''}
          placeholderTextColor={COLORS.secondaryInactive}
          onChangeText={props.onValueChange}
          multiline={true}
        />
        <IconButton
          icon="plus"
          iconType={IconType.LARGE}
          onPress={props.onClipPress}
        />
        <IconButton
          icon="send"
          iconType={IconType.LARGE}
          onPress={props.onSendPress}
          containerStyle={{ ...styles.commonStyle }}
        />
      </View>
    </View>
  );
};

export default memo(BottomBarView);
