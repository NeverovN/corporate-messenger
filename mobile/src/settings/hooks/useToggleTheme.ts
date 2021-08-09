import { BASE_HTTP } from '@/app/constants/network';
import { theme, tokenVar } from '@/common/cache/cache';
import { useApolloClient } from '@apollo/client';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { toggle } from '@/common/redux/reducers/currentTheme';

export const useToggleTheme = () => {
  const { cache } = useApolloClient();
  const dispatch = useDispatch();
  const path = `${BASE_HTTP}/user/${tokenVar()}/theme`;

  return async () => {
    try {
      const resp = await fetch(path, {
        method: 'PATCH', // или 'PUT'
      });

      dispatch(toggle());

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
