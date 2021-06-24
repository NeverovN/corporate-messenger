import ImageCropPicker from 'react-native-image-crop-picker';

export const useClipPressHandler = (setResponse: (resp: any) => void) => {
  return async () => {
    try {
      const image = await ImageCropPicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
        multiple: true,
        compressImageQuality: 0,
      });

      setResponse(image);
    } catch (err) {
      console.log(err);
    }
  };
};
