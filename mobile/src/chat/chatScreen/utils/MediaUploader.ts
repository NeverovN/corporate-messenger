import storage from '@react-native-firebase/storage';
import { utils } from '@react-native-firebase/app';

import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

// utils
import { createRandomString } from './createRandomString';

export class MediaUploader {
  static maxSize = 1000000;

  static uploadManyToStorage(data: { path: string; name: string }[]) {
    data.forEach(async (el) => {
      const reference = storage().ref(el.path);
      const pathToFile = `${utils.FilePath.PICTURES_DIRECTORY}/${el.name}`;
      console.log(pathToFile);

      await reference.putFile(pathToFile);
    });
  }

  static uploadManyToFirestore(base64: (string | null)[]) {
    const collection = firestore().collection('imagesFromChat');

    return base64.map((img) => {
      if (!img) {
        return;
      }
      const partCount = Math.floor(img.length / MediaUploader.maxSize + 1);
      const base64Parts = MediaUploader.fillBuffer(partCount, img);

      const firstPartId = MediaUploader.upload(
        base64Parts,
        partCount,
        collection,
      );

      return firstPartId;
    });
  }

  static getManyFromFirebase(
    firstIds: string[] | null,
  ): { media: Promise<string[]> | null; mediaCount: number } {
    if (firstIds === null || !firstIds.length) {
      return { media: null, mediaCount: 0 };
    }

    const result = firstIds.map(async (el) => {
      let FBDocument = (
        await firestore().collection('imagesFromChat').doc(el).get()
      ).data();

      let base64 = FBDocument?.data64 as string;
      while (FBDocument?.last === false) {
        FBDocument = (
          await firestore()
            .collection('imagesFromChat')
            .doc(FBDocument?.nextPartId)
            .get()
        ).data();

        base64 += FBDocument?.data64 ? FBDocument?.data64 : '';
      }

      return `data:image/png;base64,${base64}`;
    });

    return { media: Promise.all(result), mediaCount: result.length };
  }

  private static fillBuffer(size: number, data: string) {
    return Array<string>(size)
      .fill('')
      .map(
        (_, ind) =>
          data.substring(
            MediaUploader.maxSize * ind,
            MediaUploader.maxSize * (ind + 1),
          ) || '',
      );
  }

  private static upload(
    parts: string[],
    partCount: number,
    collection: FirebaseFirestoreTypes.CollectionReference,
  ) {
    let partId = createRandomString();
    let nextPartId: string = createRandomString();
    const firstPartId = partId;
    parts.forEach((el, ind) => {
      collection.doc(partId).set({
        data64: el,
        last: ind === partCount - 1,
        nextPartId: ind === partCount - 1 ? null : nextPartId,
      });
      partId = nextPartId;
      nextPartId = createRandomString();
    });

    return firstPartId;
  }
}
