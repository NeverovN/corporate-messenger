import { tokenVar } from 'common/cache/cache';
import { storage } from 'common/storage/index';
import { setToken } from './setToken';

export const isLoggedIn = async () => {
  if (!!tokenVar()) {
    return true;
  }
  const tokenFromStorage = await storage.getFromStorage('token'); // same as prev comm
  if (!!tokenFromStorage) {
    setToken(tokenFromStorage);
    return true;
  }
  return false;
};
