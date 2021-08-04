import React, { FC, memo, useMemo } from 'react';
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
import { IconType } from '@/common/types/styles';

interface IBottomBarViewProps {
  onEmojiPress(): void;
  onClipPress(): void;
  onSendPress(): void;
  message: string | null;
  media: string[] | null;
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
  const imagesToRender = useMemo(() => {
    return props.media?.length
      ? props.media.map((img) => {
          return {
            style: styles.imageStyle,
            source: img,
          };
        })
      : null;
  }, [props.media]);

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
        <View style={styles.textInputWrapperStyle}>
          <TextInput
            style={styles.textInputStyle}
            placeholder="MESSAGE"
            value={props.message || ''}
            placeholderTextColor={COLORS.secondaryInactive}
            onChangeText={props.onValueChange}
            multiline={true}
          />
        </View>
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
