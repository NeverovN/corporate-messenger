import firebase from 'firebase';
import 'firebase/firestore';

export class FireBaseController {
  static removeItems(ids: string[]): void {
    ids.forEach(async (imageId) => {
      try {
        let imageDoc = await firebase
          .firestore()
          .collection('imagesFromChat')
          .doc(imageId);
        let imageInFB = (await imageDoc.get()).data();

        while (imageInFB?.last === false) {
          const nextId = imageInFB.nextPartId;
          imageDoc.delete();
          imageDoc = await firebase
            .firestore()
            .collection('imagesFromChat')
            .doc(nextId);
          imageInFB = (await imageDoc.get()).data();
        }
        imageDoc.delete();
      } catch (error) {
        throw Error('FireBase deletion error');
      }
    });
  }
}
