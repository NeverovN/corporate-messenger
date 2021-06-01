// storage
import { storage } from 'common/storage';
import { tokenVar } from '@/common/cache/cache';
import keys from 'common/constants/storageKeys';

export const setToken = (token: string) => {
  if (token === '') {
    throw Error('bad token provided');
  }
  storage.addToStorage(keys.token, token);
  tokenVar(token);
};
