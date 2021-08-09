import ImageCropPicker, { Image } from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';
import { reducer } from '../utils/firebaseUploader';
import { createRandomString } from '../utils/createRandomString';
const defSubstringLength = 1000000;

export const useClipPressHandler = (
  setResponse: (resp: Image[]) => void,
  firstIds: string[],
) => {
  const FBImagesCollection = firestore().collection('images');
  return async () => {
    try {
      const images = await ImageCropPicker.openPicker({
        mediaType: 'photo',
        multiple: true,
        includeBase64: true,
      });

      const imagesForFirebase = images.map((img) => {
        firstIds.push(createRandomString());
        const imageDocument: { partCount: number; data: string[] } = {
          partCount: 0,
          data: [],
        };
        const length = img.data?.length || 0;
        imageDocument.partCount = Math.floor(length / defSubstringLength + 1);

        for (let i: number = 0; i < imageDocument.partCount; i++) {
          imageDocument.data.push(
            img.data?.substring(
              defSubstringLength * i,
              defSubstringLength * (i + 1),
            ) || '',
          );
        }

        return imageDocument;
      });

      imagesForFirebase.forEach(async ({ data, partCount }, index) => {
        try {
          data
            .reverse()
            .reduce(
              reducer(partCount, FBImagesCollection, firstIds[index]),
              '' as string | Promise<string>,
            );
        } catch (error) {
          console.error(error);
        }
      });

      setResponse(images);
    } catch (err) {
      console.log(err);
    }
  };
};
