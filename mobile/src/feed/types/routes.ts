import { NavigatorScreenParams } from '@react-navigation/core';

export type RootStackParamList = {
  Feed: NavigatorScreenParams<TopTabsParamList>;
};

export type TopTabsParamList = {
  AllFeed: undefined;
  FriendFeed: undefined;
};
