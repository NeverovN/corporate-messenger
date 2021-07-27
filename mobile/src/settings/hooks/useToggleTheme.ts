import { BASE_HTTP } from '@/app/constants/network';
import { tokenVar } from '@/common/cache/cache';
import { useApolloClient } from '@apollo/client';
import { Alert } from 'react-native';

export const useToggleTheme = () => {
  const { cache } = useApolloClient();
  const path = `${BASE_HTTP}/user/${tokenVar()}/theme`;

  return async () => {
    try {
      await fetch(path, {
        method: 'PATCH', // или 'PUT'
      });

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
