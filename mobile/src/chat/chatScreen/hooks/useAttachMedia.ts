import { SetStateAction, Dispatch } from 'react';
import ImageCropPicker from 'react-native-image-crop-picker';
import { MediaUploader } from 'chat/chatScreen/utils/MediaUploader';
import { makeBase64URI } from '../utils/makeBase64URI';

export const useClipPressHandler = (
  setResponse: (resp: string[]) => void,
  setFirstIDS: Dispatch<SetStateAction<string[] | null>>,
) => {
  return async () => {
    try {
      const images = await ImageCropPicker.openPicker({
        mediaType: 'photo',
        multiple: true,
        includeBase64: true,
      });
      const normalizedImages = images.map((image) => image.data || null);
      const resultingIds = MediaUploader.uploadManyToFirestore(
        normalizedImages,
      );
      resultingIds.forEach((el) => {
        if (!el) {
          return;
        }
        setFirstIDS((prev) => (prev ? [...prev, el] : [el]));
      });
      setResponse(makeBase64URI(normalizedImages));
    } catch (err) {
      console.log(err);
    }
  };
};
