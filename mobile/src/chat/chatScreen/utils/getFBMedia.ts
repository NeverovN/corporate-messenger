import firestore from '@react-native-firebase/firestore';

export const getFBMedia = (media: string[] | null) => {
  if (media === null || !media.length) {
    return null;
  }

  const result = media.map(async (el) => {
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

  return Promise.all(result);
};
