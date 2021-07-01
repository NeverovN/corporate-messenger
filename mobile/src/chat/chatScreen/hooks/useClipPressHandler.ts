import ImageCropPicker, { ImageOrVideo } from 'react-native-image-crop-picker';

export const useClipPressHandler = (
  setResponse: (resp: ImageOrVideo[]) => void,
) => {
  return async () => {
    try {
      const image = await ImageCropPicker.openPicker({
        width: 300,
        height: 400,
        multiple: true,
      });

      setResponse(image);
    } catch (err) {
      console.log(err);
    }
  };
};
