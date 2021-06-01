import AsyncStorage from '@react-native-community/async-storage';

interface IAsyncStorage {
  addToStorage(key: string, value: string): Promise<boolean>;
  getFromStorage(key: string): Promise<string | null>;
  removeFromStorage(key: string): Promise<boolean>;
  clear(): Promise<void>;
}

export const storage: IAsyncStorage = {
  addToStorage: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  getFromStorage: async (key) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.log(error);
      return Promise.reject();
    }
  },
  removeFromStorage: async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  clear: async () => await AsyncStorage.clear(),
};
