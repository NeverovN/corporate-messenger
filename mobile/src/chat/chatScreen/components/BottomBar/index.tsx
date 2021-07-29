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
          icon="plus" // I don't understand, why it does not work
          onPress={props.onEmojiPress}
          containerStyle={styles.commonStyle}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholder=" MESSAGE"
          placeholderTextColor={COLORS.secondaryInactive}
          onChangeText={props.onValueChange}
          multiline={true}
        />
        <IconButton icon="plus" onPress={props.onClipPress} />
        <IconButton
          icon="send"
          onPress={props.onSendPress}
          containerStyle={{ ...styles.commonStyle }}
        />
      </View>
    </View>
  );

  // return (
  //   <>
  //     {imagesToRender ? (
  //       <FlatList
  //         keyExtractor={keyExtractor}
  //         style={styles.imageViewer}
  //         horizontal={true}
  //         data={imagesToRender}
  //         renderItem={renderImage}
  //       />
  //     ) : null}

  //     <View style={styles.bottomBarStyle}>
  //       <IconButton
  //         icon="plus" // I don't understand, why it does not work
  //         onPress={props.onEmojiPress}
  //         containerStyle={{ ...styles.commonStyle }}
  //       />

  //       <TextInput
  //         style={styles.textInputStyle}
  //         placeholder="Message"
  //         placeholderTextColor={COLORS.secondaryInactive}
  //         onChangeText={props.onValueChange}
  //         multiline={true}
  //         scrollEnabled={true}
  //         textAlignVertical="center"
  //       />

  //       <IconButton
  //         icon="clip"
  //         onPress={props.onClipPress}
  //         containerStyle={{ ...styles.commonStyle }}
  //       />
  //       <IconButton
  //         icon="send"
  //         onPress={props.onSendPress}
  //         containerStyle={{ ...styles.commonStyle }}
  //       />
  //     </View>
  //   </>
  // );
};

export default memo(BottomBarView);
