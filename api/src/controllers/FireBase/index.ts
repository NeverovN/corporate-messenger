import firebase from 'firebase';
import 'firebase/firestore';

export class FireBaseController {
  static collections = {
    chatMessages: 'imagesFromChat',
    chatLogos: 'chatLogos',
    userAvatars: 'userAvatars',
  };

  static addItems(base64Strings: string[] | null): null | Promise<any[]> {
    if (!base64Strings) {
      return null;
    }
    if (!base64Strings.length) {
      return null;
    }
    const storage = firebase.storage().ref();
    const urls = base64Strings.map(async (base64, index) => {
      await storage.child(index.toString()).putString(base64, 'base64');
      return await storage.child(index.toString()).getDownloadURL();
    });

    return Promise.all(urls);
  }

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
