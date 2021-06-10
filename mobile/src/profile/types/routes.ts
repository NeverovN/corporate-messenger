import { StackNavigationProp } from '@react-navigation/stack';
import {
  PROFILE_SCREEN_NAME,
  USER_SEARCH_SCREEN_NAME,
  THIRD_PARTY_USER_SCREEN_NAME,
} from 'profile/constants/routes';

export type ProfileStackParamList = {
  [PROFILE_SCREEN_NAME]: undefined;
  [USER_SEARCH_SCREEN_NAME]: undefined;
  [THIRD_PARTY_USER_SCREEN_NAME]: { userId: string };
};

export type ProfileScreenNavigationProp = StackNavigationProp<
  ProfileStackParamList,
  typeof USER_SEARCH_SCREEN_NAME
>;
