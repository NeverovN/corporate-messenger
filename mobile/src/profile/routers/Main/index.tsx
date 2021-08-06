// Auth router (authentication level router)

import React, { memo, FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StackActions, useNavigation } from '@react-navigation/native';

// common components
import HeaderBackButtonWithoutText from '@/common/components/HeaderBackButtonWithoutText';

// constants
import {
  PROFILE_SCREEN_NAME,
  USER_SEARCH_SCREEN_NAME,
  THIRD_PARTY_USER_SCREEN_NAME,
  CREATE_POST_SCREEN_NAME,
  FRIENDS_LIST_SCREEN,
} from '@/profile/constants/routes';
import COLORS from 'common/constants/colors';

// containers
import Profile from 'profile/containers/Profile';
import SearchUsersScreen from 'profile/containers/SearchUsersScreen';
import ThirdPartyUser from 'profile/containers/ThirdPartyUser';
import CreatePostScreen from '@/feed/containers/CreatePostScreen';
import FriendsScreen from '@/profile/containers/FriendsScreen';

// hocs
import HeaderRight from '@/profile/containers/HeaderRight';
import HeaderLeft from '@/profile/containers/HeaderLeft';

// types
import { MainBottomTabNavigationProp } from 'app/types/routes';
import { ProfileStackParamList } from 'profile/types/routes';

const Screens = createStackNavigator<ProfileStackParamList>();

interface IProfileRouterProps {}

const ProfileRouter: FC<IProfileRouterProps> = () => {
  const navigation = useNavigation<MainBottomTabNavigationProp>();
  navigation.addListener('tabPress', (e) => {
    e.preventDefault();

    navigation.dispatch(
      StackActions.replace('BottomTab', {
        screen: 'ProfileStack',
        params: { screen: 'Profile' },
      }),
    );
  });

  return (
    <Screens.Navigator initialRouteName={PROFILE_SCREEN_NAME}>
      <Screens.Screen
        name={PROFILE_SCREEN_NAME}
        component={Profile}
        options={{
          headerRight: () => <HeaderRight />, // perhaps it should be moved in its own file
          headerLeft: () => <HeaderLeft />,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          title: 'PROFILE',
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: 'Mulish-Regular_Light',
            color: COLORS.secondary,
          },
        }}
      />
      <Screens.Screen
        name={USER_SEARCH_SCREEN_NAME}
        component={SearchUsersScreen}
        options={{
          headerLeft: () => <HeaderBackButtonWithoutText />,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          title: 'ALL USERS',
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: 'Mulish-Regular_Light',
            color: COLORS.secondary,
          },
        }}
      />
      <Screens.Screen
        name={THIRD_PARTY_USER_SCREEN_NAME}
        component={ThirdPartyUser}
        options={{
          headerLeft: () => <HeaderBackButtonWithoutText />,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          title: 'PROFILE',
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: 'Mulish-Regular_Light',
            color: COLORS.secondary,
          },
        }}
      />
      <Screens.Screen
        name={CREATE_POST_SCREEN_NAME}
        component={CreatePostScreen}
        options={{
          headerLeft: () => <HeaderBackButtonWithoutText />,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          title: 'CREATE POST',
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: 'Mulish-Regular_Light',
            color: COLORS.secondary,
          },
        }}
      />
      <Screens.Screen
        name={FRIENDS_LIST_SCREEN}
        component={FriendsScreen}
        options={{
          headerLeft: () => <HeaderBackButtonWithoutText />,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          title: 'FRIENDS',
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: 'Mulish-Regular_Light',
            color: COLORS.secondary,
          },
        }}
      />
    </Screens.Navigator>
  );
};

export default memo(ProfileRouter);
