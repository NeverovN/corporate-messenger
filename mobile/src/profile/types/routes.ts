import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/core';
import {
  PROFILE_SCREEN_NAME,
  USER_SEARCH_SCREEN_NAME,
  THIRD_PARTY_USER_SCREEN_NAME,
  CREATE_POST_SCREEN_NAME,
  FRIENDS_LIST_SCREEN,
} from 'profile/constants/routes';

export type ProfileStackParamList = {
  [PROFILE_SCREEN_NAME]: undefined;
  [USER_SEARCH_SCREEN_NAME]: undefined;
  [CREATE_POST_SCREEN_NAME]: undefined;
  [THIRD_PARTY_USER_SCREEN_NAME]: { userId: string };
  [FRIENDS_LIST_SCREEN]: undefined;
};

export type ProfileScreenNavigationProp = StackNavigationProp<
  ProfileStackParamList,
  typeof PROFILE_SCREEN_NAME
>;

export type SearchScreenNavigationProp = StackNavigationProp<
  ProfileStackParamList,
  typeof USER_SEARCH_SCREEN_NAME
>;

export type FriendsScreenNavigationProp = StackNavigationProp<
  ProfileStackParamList,
  typeof FRIENDS_LIST_SCREEN
>;

export type ThirdPartyUserScreenNavigationProp = StackNavigationProp<
  ProfileStackParamList,
  typeof THIRD_PARTY_USER_SCREEN_NAME
>;

export type CreatePostScreenNavigationProp = StackNavigationProp<
  ProfileStackParamList,
  typeof CREATE_POST_SCREEN_NAME
>;

export type ThirdPartyUserRouteProp = RouteProp<
  ProfileStackParamList,
  typeof THIRD_PARTY_USER_SCREEN_NAME
>;
