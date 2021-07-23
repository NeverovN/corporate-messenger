import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export const reducer = (
  partCount: number,
  images: FirebaseFirestoreTypes.CollectionReference,
  lastId: string,
) => async (
  acc: string | Promise<string>,
  data64: string,
  ind: number,
  arr: string[],
) => {
  const nextPartId = await acc;

  if (nextPartId) {
    if (arr.length - ind === 1) {
      await images.doc(lastId).set({
        data64,
        part: arr.length - ind,
        last: arr.length !== partCount,
        nextPartId,
      });
      return lastId;
    }
    return (
      await images.add({
        data64,
        part: arr.length - ind,
        last: arr.length !== partCount,
        nextPartId,
      })
    ).id;
  } else {
    if (arr.length - ind === 1) {
      await images.doc(lastId).set({
        data64,
        part: arr.length - ind,
        last: arr.length !== partCount,
      });
      return lastId;
    }
    return (
      await images.add({
        data64,
        part: arr.length - ind,
        last: arr.length !== partCount,
      })
    ).id;
  }
};
