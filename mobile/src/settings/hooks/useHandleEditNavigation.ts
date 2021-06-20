import { useNavigation } from '@react-navigation/core';
import Operations from '@/settings/constants/operations';

// types
import { EditPasswordNavigationProp } from 'settings/types/routes';

// routers
import {
  EDIT_EMAIL_SCREEN_NAME,
  EDIT_PASSWORD_SCREEN_NAME,
  EDIT_USERNAME_SCREEN_NAME,
} from 'settings/constants/routes';
import { useGetUserQuery } from '@/common/types/gql.generated';

export const useHandleEditNavigation = (screen: Operations) => {
  const { data } = useGetUserQuery();
  const navigation = useNavigation<EditPasswordNavigationProp>();

  switch (screen) {
    case Operations.EMAIL: {
      return () =>
        navigation.navigate(EDIT_EMAIL_SCREEN_NAME, {
          newEmail: data?.getUser.email || '',
        });
    }
    case Operations.PASSWORD: {
      return () =>
        navigation.navigate(EDIT_PASSWORD_SCREEN_NAME, {
          old: '',
          new: '',
          newRep: '',
        });
    }
    case Operations.USERNAME: {
      return () =>
        navigation.navigate(EDIT_USERNAME_SCREEN_NAME, {
          newFirstName: data?.getUser.firstName || '',
          newLastName: data?.getUser.lastName || '',
        });
    }
  }
};
