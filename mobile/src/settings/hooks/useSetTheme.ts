import { BASE_HTTP } from '@/app/constants/network';
import { theme, tokenVar } from '@/common/cache/cache';
import { useApolloClient } from '@apollo/client';
import { Alert } from 'react-native';
import { set } from '@/common/redux/reducers/currentTheme';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/common/redux/store';

export const useSetTheme = () => {
  const { cache } = useApolloClient();
  const currentTheme = useSelector(
    (state: RootState) => state.currentTheme.theme,
  );
  const dispatch = useDispatch();

  const path = `${BASE_HTTP}/user/${tokenVar()}/theme`;

  return async (themeName: 'light' | 'dark' | 'native') => {
    if (currentTheme === themeName) {
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
    } catch (error) {
      Alert.alert('Error', `${error}`);
    }
  };
};
