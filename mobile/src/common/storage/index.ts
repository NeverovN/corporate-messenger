import AsyncStorage from '@react-native-community/async-storage';

interface IAsyncStorage {
  addToStorage(
    key: string,
    value: string,
    cb?: (er: Error | undefined) => void,
  ): Promise<boolean>;
  getFromStorage(
    key: string,
    cb?: (er: Error | undefined) => void,
  ): Promise<string | null>;
  removeFromStorage(
    key: string,
    cb?: (er: Error | undefined) => void,
  ): Promise<boolean>;
  clear(): Promise<void>;
}

export const storage: IAsyncStorage = {
  addToStorage: async (key, value, cb) => {
    try {
      await AsyncStorage.setItem(key, value, cb);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  getFromStorage: async (key, cb) => {
    try {
      return await AsyncStorage.getItem(key, cb);
    } catch (error) {
      console.log(error);
      return Promise.reject();
    }
  },
  removeFromStorage: async (key, cb) => {
    try {
      await AsyncStorage.removeItem(key, cb);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  clear: async () => await AsyncStorage.clear(),
};
