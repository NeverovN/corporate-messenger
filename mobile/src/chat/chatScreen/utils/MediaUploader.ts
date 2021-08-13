import storage from '@react-native-firebase/storage';

export class MediaUploader {
  static async uploadManyToStorage(data: string[]) {
    const urlPromises = data.map(async (el) => {
      const reference = storage().ref(Math.random().toString());
      try {
        await reference.putString(el, 'base64');
      } catch (error) {
        console.error(error);
      }
      return await reference.getDownloadURL();
    });

    return await Promise.all(urlPromises);
  }

  static async uploadOneToStorage(data: string | null) {
    if (!data) {
      return null;
    }
    const reference = storage().ref(Math.random().toString());
    try {
      await reference.putString(data, 'base64');
    } catch (error) {
      console.error(error);
    }
    return await reference.getDownloadURL();
  }
}
