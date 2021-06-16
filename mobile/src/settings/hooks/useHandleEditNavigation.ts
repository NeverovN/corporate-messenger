import { useNavigation } from '@react-navigation/core';
import Directions from 'settings/constants/directions';

// types
import { EditNavigationProp } from 'settings/types/routes';

// routers
import {
  EDIT_EMAIL_SCREEN_NAME,
  EDIT_PASSWORD_SCREEN_NAME,
  EDIT_USERNAME_SCREEN_NAME,
} from 'settings/constants/routes';
import { useGetUserQuery } from '@/common/types/gql.generated';

export const useHandleEditNavigation = (screen: Directions) => {
  const { data } = useGetUserQuery();
  const navigation = useNavigation<EditNavigationProp>();

  switch (screen) {
    case Directions.EMAIL: {
      return () =>
        navigation.navigate(EDIT_EMAIL_SCREEN_NAME, {
          newEmail: data?.getUser.email || '',
        });
    }
    case Directions.PASSWORD: {
      return () => navigation.navigate(EDIT_PASSWORD_SCREEN_NAME);
    }
    case Directions.USERNAME: {
      return () =>
        navigation.navigate(EDIT_USERNAME_SCREEN_NAME, {
          newFirstName: data?.getUser.firstName || '',
          newLastName: data?.getUser.lastName || '',
        });
    }
  }
};
