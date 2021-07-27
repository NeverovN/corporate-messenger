import firestore from '@react-native-firebase/firestore';

export const getFBMedia = (media: string[] | null) => {
  if (media === null) {
    return null;
  }
  const result = media.map(async (el) => {
    let FBDocument = (
      await firestore().collection('images').doc(el).get()
    ).data();

    let base64 = FBDocument?.data64 as string;
    while (FBDocument?.last === false) {
      FBDocument = (
        await firestore().collection('images').doc(FBDocument?.nextPartId).get()
      ).data();

      base64 += FBDocument?.data64 ? FBDocument?.data64 : '';
    }

    return base64;
  });

  return Promise.all(result);
};
