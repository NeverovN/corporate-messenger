import { storage } from '../storage';
import { tokenVar } from '../cache/cache';

export const logOut = async () => {
  try {
    await storage.removeFromStorage('token');
  } catch (error) {
    console.log(error);
  }
  tokenVar('');
};
