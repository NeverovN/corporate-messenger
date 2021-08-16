import { BASE_HTTP } from '@/app/constants/network';
import { theme, tokenVar } from '@/common/cache/cache';
import { useApolloClient } from '@apollo/client';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { set } from '@/common/redux/reducers/currentTheme';

export const useSetTheme = () => {
  const { cache } = useApolloClient();
  const dispatch = useDispatch();
  const path = `${BASE_HTTP}/user/${tokenVar()}/theme`;

  return async (themeName: 'light' | 'dark' | 'native') => {
    try {
      const resp = await fetch(`${path}/${themeName}`, {
        method: 'PATCH',
      });

      dispatch(set(themeName));

      const newTheme = await resp.json();
      theme(newTheme.theme);

      cache.modify({
        fields: {
          getUser() {},
        },
      });
    } catch (error) {
      Alert.alert('Error', `${error}`);
    }
  };
};
