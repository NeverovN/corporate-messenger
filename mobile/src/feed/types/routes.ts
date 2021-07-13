import { NavigatorScreenParams } from '@react-navigation/core';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// consts
import {
  FEED_SCREEN_NAME,
  POST_SCREEN_NAME,
  ALL_FEED_SCREEN_NAME,
  FRIEND_FEED_SCREEN_NAME,
  EDIT_POST_SCREEN_NAME,
} from 'feed/constants/routes';

export type RootStackParamList = {
  [FEED_SCREEN_NAME]: NavigatorScreenParams<TopTabsParamList>;
  [POST_SCREEN_NAME]: { postId: string };
  [EDIT_POST_SCREEN_NAME]: {
    postId: string;
    text: string | null;
    media: string[] | null;
  };
};

export type TopTabsParamList = {
  [ALL_FEED_SCREEN_NAME]: undefined;
  [FRIEND_FEED_SCREEN_NAME]: undefined;
};

export type PostStackNavigationProp = StackNavigationProp<
  RootStackParamList,
  typeof POST_SCREEN_NAME
>;

export type PostScreenRouteProp = RouteProp<
  RootStackParamList,
  typeof POST_SCREEN_NAME
>;

export type EditPostScreenRouteProp = RouteProp<
  RootStackParamList,
  typeof EDIT_POST_SCREEN_NAME
>;
