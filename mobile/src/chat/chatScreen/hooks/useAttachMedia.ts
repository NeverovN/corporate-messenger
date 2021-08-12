import ImageCropPicker from 'react-native-image-crop-picker';
import { MediaUploader } from 'chat/chatScreen/utils/MediaUploader';
import { makeBase64URI } from '../utils/makeBase64URI';

export const useClipPressHandler = (
  setResponse: (resp: string[]) => void,
  setFirstIDS: (ids: string[]) => void,
) => {
  return async () => {
    try {
      const images = await ImageCropPicker.openPicker({
        mediaType: 'photo',
        multiple: true,
        includeBase64: true,
      });
      const normalizedImages = images.map((image) => {
        return image.data || null;
      });
      // const resultingIds = MediaUploader.uploadManyMessageMedia(
      //   normalizedImages,
      // );
      const test = await MediaUploader.uploadManyToStorage(normalizedImages);
      setFirstIDS(test);
      setResponse(makeBase64URI(normalizedImages));
    } catch (err) {
      console.log(err);
    }
  };
};
