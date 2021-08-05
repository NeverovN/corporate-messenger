import storage from '@react-native-firebase/storage';
import { utils } from '@react-native-firebase/app';

import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

// utils
import { createRandomString } from './createRandomString';

export class MediaUploader {
  private static maxSize = 1000000;
  private static collections = {
    messages: 'imagesFromChat',
    chatLogos: 'chatLogos',
    users: 'userAvatars',
  };

  static uploadManyToStorage(data: { path: string; name: string }[]) {
    data.forEach(async (el) => {
      const reference = storage().ref(el.path);
      const pathToFile = `${utils.FilePath.PICTURES_DIRECTORY}/${el.name}`;
      console.log(pathToFile);

      await reference.putFile(pathToFile);
    });
  }

  static uploadManyMessageMedia(base64: (string | null)[]) {
    return MediaUploader.uploadManyToFirestore(base64, 'imagesFromChat');
  }

  static uploadChatLogo(base64: string | null) {
    return MediaUploader.uploadOneToFirestore(
      base64,
      MediaUploader.collections.chatLogos,
    );
  }

  static uploadUserAvatar(base64: string | null) {
    return MediaUploader.uploadOneToFirestore(
      base64,
      MediaUploader.collections.users,
    );
  }

  private static uploadManyToFirestore(
    base64: (string | null)[],
    collectionName: string,
  ) {
    const collection = firestore().collection(collectionName);

    const firstIds = base64.map((img) => {
      if (!img) {
        return null;
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

    return firstIds.filter((id) => id !== null) as string[];
  }

  private static uploadOneToFirestore(
    base64: string | null,
    collectionName: string,
  ) {
    if (!base64) {
      return null;
    }

    const collection = firestore().collection(collectionName);

    const partCount = Math.floor(base64.length / MediaUploader.maxSize + 1);
    const base64Parts = MediaUploader.fillBuffer(partCount, base64);

    const firstPartId = MediaUploader.upload(
      base64Parts,
      partCount,
      collection,
    );

    return firstPartId;
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

  static getChatLogoFromFirebase(firstId: string | null) {
    return this.getOneFromFirebase(
      firstId,
      MediaUploader.collections.chatLogos,
    );
  }

  static getUserAvatarFromFirebase(firstId: string | null) {
    return this.getOneFromFirebase(firstId, MediaUploader.collections.users);
  }

  private static async getOneFromFirebase(
    firstId: string | null,
    collectionName: string,
  ): Promise<string | null> {
    if (!firstId) {
      return null;
    }

    let FBDocument = (
      await firestore().collection(collectionName).doc(firstId).get()
    ).data();

    let base64 = FBDocument?.data64 as string;
    while (FBDocument?.last === false) {
      FBDocument = (
        await firestore()
          .collection(collectionName)
          .doc(FBDocument?.nextPartId)
          .get()
      ).data();

      base64 += FBDocument?.data64 ? FBDocument?.data64 : '';
    }

    return `data:image/png;base64,${base64}`;
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
