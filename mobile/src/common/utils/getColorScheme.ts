import { Alert } from 'react-native';

// consts
import { BASE_HTTP } from '@/app/constants/network';

// cache
import { tokenVar } from '@/common/cache/cache';

import { lightTheme, darkTheme } from 'common/constants/colors';

export const getColorScheme = async () => {
  if (!tokenVar()) {
    return lightTheme;
  }
  const path = `${BASE_HTTP}/user/${tokenVar()}/theme`;
  try {
    const resp = await fetch(path, {
      method: 'GET', // или 'PUT'
    });
    console.log(resp);

    const theme = await resp.json();

    if (typeof theme === 'string') {
      return theme === 'light' ? lightTheme : darkTheme;
    }
    return lightTheme;
  } catch (error) {
    Alert.alert('ErrorHere', `${error}`);
    return lightTheme;
  }
};
