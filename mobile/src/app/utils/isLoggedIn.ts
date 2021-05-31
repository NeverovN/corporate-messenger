import { tokenVar } from 'common/cache/cache';
import { storage } from 'common/storage/index';

export const isLoggedIn = async () => {
  console.log('tokenVar: ', tokenVar()); // debug log to see where did the token came from
  if (!!tokenVar()) {
    return true;
  }
  const tokenFromStorage = await storage.getFromStorage('token'); // same as prev comm
  console.log('tokenFromStorage: ', tokenFromStorage);
  if (!!tokenFromStorage) {
    tokenVar(tokenFromStorage);
    return true;
  }
  return false;
};
