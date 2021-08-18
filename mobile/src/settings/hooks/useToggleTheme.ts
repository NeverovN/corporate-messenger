import { BASE_HTTP } from '@/app/constants/network';
import { theme, tokenVar } from '@/common/cache/cache';
import { useApolloClient } from '@apollo/client';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '@/common/redux/reducers/currentTheme';
import { RootState } from '@/common/redux/store';

export const useToggleTheme = () => {
  const { cache } = useApolloClient();
  const themeName = useSelector((state: RootState) => state.currentTheme.theme);
  const dispatch = useDispatch();

  const path = `${BASE_HTTP}/user/${tokenVar()}/theme`;

  return async (toTheme: 'light' | 'dark') => {
    if (themeName === toTheme) {
      return;
    }

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

      const newTheme = await resp.json();
      theme(newTheme.theme);
    } catch (error) {
      Alert.alert('Error', `${error}`);
    }
  };
};
