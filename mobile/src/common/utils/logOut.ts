import { storage } from '../storage';
import { tokenVar } from '../cache/cache';

export const logOut = async () => {
  try {
    await storage.removeFromStorage('token', (error) => {
      console.log(error);
      storage.clear();
    });
  } catch (error) {
    console.log(error);
  }
  tokenVar('');
};
