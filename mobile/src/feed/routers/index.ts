import { createStackNavigator } from '@react-navigation/stack';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

type RootStackParamList = {
  Feed: undefined;
};

type TopTabsParamList = {
  AllFeed: undefined;
  FriendFeed: undefined;
};

export const InnerScreens = createMaterialTopTabNavigator<TopTabsParamList>();

const Screens = createStackNavigator<RootStackParamList>();

export default Screens;
