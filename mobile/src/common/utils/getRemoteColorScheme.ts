import { Alert } from 'react-native';

// consts
import { BASE_HTTP } from '@/app/constants/network';

// cache
import { tokenVar } from '@/common/cache/cache';

export const getColorScheme = async (): Promise<'light' | 'dark'> => {
  if (!tokenVar()) {
    return 'light';
  }
  const path = `${BASE_HTTP}/user/theme`;
  try {
    const resp = await fetch(path, {
      method: 'GET', // или 'PUT'
      headers: {
        authorization: tokenVar(),
      },
    });

    const theme = (await resp.json()) as 'light' | 'dark';

    if (typeof theme === 'string') {
      return theme;
    }
    return 'light';
  } catch (error) {
    Alert.alert('ErrorHere', `${error}`);
    return 'light';
  }
};
