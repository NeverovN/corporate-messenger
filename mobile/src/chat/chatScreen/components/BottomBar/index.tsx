import React, { FC, memo } from 'react';
import { View, TextInput, FlatList, ListRenderItem } from 'react-native';
import FastImage from 'react-native-fast-image';

// common components
import IconButton from 'common/components/Button/IconButton';

import { useStyles } from './styles';
import { IconType } from '@/common/types/styles';
import { useTheme } from 'react-native-stylex';

interface IBottomBarViewProps {
  onEmojiPress(): void;
  onClipPress(): void;
  onSendPress(): void;
  message: string | null;
  media: string[] | null;
  onValueChange(message: string): void;
}

const renderImage: ListRenderItem<{
  style: any;
  source: string;
}> = ({ item, index }) => {
  return (
    <FastImage key={index} style={item.style} source={{ uri: item.source }} />
  );
};

const keyExtractor = () => Math.random().toString();

const BottomBarView: FC<IBottomBarViewProps> = (props) => {
  const styles = useStyles();
  const { palette } = useTheme();
  const imagesToRender = props.media
    ? props.media.map((img) => {
        return {
          style: styles.imageStyle,
          source: img,
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
        <View style={styles.textInputWrapperStyle}>
          <TextInput
            style={styles.textInputStyle}
            placeholder="MESSAGE"
            value={props.message || ''}
            placeholderTextColor={palette.secondaryInactive}
            onChangeText={props.onValueChange}
            multiline={true}
          />
        </View>
        <IconButton
          icon="plus"
          iconType={IconType.LARGE}
          iconStyle={styles.iconStyle}
          onPress={props.onClipPress}
        />
        <IconButton
          icon="send"
          iconType={IconType.LARGE}
          iconStyle={styles.commonStyle}
          onPress={props.onSendPress}
        />
      </View>
    </View>
  );
};

export default memo(BottomBarView);
