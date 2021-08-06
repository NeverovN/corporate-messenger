import firebase from 'firebase';
import 'firebase/firestore';

export class FireBaseController {
  static collections = {
    chatMessages: 'imagesFromChat',
    chatLogos: 'chatLogos',
    userAvatars: 'userAvatars',
  };

  static removeItems(ids: string[]): void {
    ids.forEach(async (imageId) => {
      try {
        let imageDoc = await firebase
          .firestore()
          .collection(FireBaseController.collections.chatMessages)
          .doc(imageId);
        let imageInFB = (await imageDoc.get()).data();

        while (imageInFB?.last === false) {
          const nextId = imageInFB.nextPartId;
          imageDoc.delete();
          imageDoc = await firebase
            .firestore()
            .collection(FireBaseController.collections.chatMessages)
            .doc(nextId);
          imageInFB = (await imageDoc.get()).data();
        }
        imageDoc.delete();
      } catch (error) {
        throw Error('FireBase deletion error');
      }
    });
  }

  static removeChatLogo(id: string | null): void {
    if (!id) {
      return;
    }
    FireBaseController.removeItem(id, FireBaseController.collections.chatLogos);
  }

  static removeUserAvatar(id: string | null): void {
    if (!id) {
      return;
    }
    FireBaseController.removeItem(
      id,
      FireBaseController.collections.userAvatars,
    );
  }

  private static async removeItem(id: string, collectionName: string) {
    try {
      let imageDoc = await firebase
        .firestore()
        .collection(collectionName)
        .doc(id);
      let imageInFB = (await imageDoc.get()).data();

      while (imageInFB?.last === false) {
        const nextId = imageInFB.nextPartId;
        imageDoc.delete();
        imageDoc = await firebase
          .firestore()
          .collection(collectionName)
          .doc(nextId);
        imageInFB = (await imageDoc.get()).data();
      }
      imageDoc.delete();
    } catch (error) {
      throw Error('FireBase deletion error');
    }
  }
}
