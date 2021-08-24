import ImageCropPicker from 'react-native-image-crop-picker';
import { MediaUploader } from 'chat/chatScreen/utils/MediaUploader';
import { makeBase64URI } from '../utils/makeBase64URI';

export const useAttachMedia = (
  setResponse: (resp: string[]) => void,
  setStorageURLs: (urls: string[]) => void,
) => {
  return async () => {
    try {
      const images = await ImageCropPicker.openPicker({
        mediaType: 'photo',
        multiple: true,
        includeBase64: true,
      });
      const base64 = images.reduce((acc, image) => {
        return image.data ? [...acc, image.data] : acc;
      }, [] as string[]);

      const storageURLs = await MediaUploader.uploadManyToStorage(base64);
      setStorageURLs(storageURLs);
      setResponse(makeBase64URI(base64));
    } catch (err) {
      console.log(err);
    }
  };
};
