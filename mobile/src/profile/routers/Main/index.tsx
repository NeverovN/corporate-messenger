// Auth router (authentication level router)

import React, { memo, FC } from 'react';

// constants
import {
  PROFILE_SCREEN_NAME,
  USER_SEARCH_SCREEN_NAME,
  THIRD_PARTY_USER_SCREEN_NAME,
  CREATE_POST_SCREEN_NAME,
} from '@/profile/constants/routes';

// containers
import Profile from 'profile/containers/Profile';
import SearchUsersScreen from 'profile/containers/SearchUsersScreen';
import ThirdPartyUser from 'profile/containers/ThirdPartyUser';
import CreatePostScreen from '@/profile/containers/CreatePostScreen';

// hocs
import HeaderRight from '@/profile/containers/HeaderRight';
import HeaderLeft from '@/profile/containers/HeaderLeft';

// types
import { MainBottomTabNavigationProp } from 'app/types/routes';
import { ProfileStackParamList } from 'profile/types/routes';
import { createStackNavigator } from '@react-navigation/stack';
import { StackActions, useNavigation } from '@react-navigation/native';

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

  const headerRight = () => {
    return <HeaderRight />;
  };

  const headerLeft = () => {
    return <HeaderLeft />;
  };

  return (
    <Screens.Navigator initialRouteName={PROFILE_SCREEN_NAME}>
      <Screens.Screen
        name={PROFILE_SCREEN_NAME}
        component={Profile}
        options={{
          headerRight: headerRight, // perhaps it should be moved in its own file
          headerLeft: headerLeft,
        }}
      />
      <Screens.Screen
        name={USER_SEARCH_SCREEN_NAME}
        component={SearchUsersScreen}
      />
      <Screens.Screen
        name={THIRD_PARTY_USER_SCREEN_NAME}
        component={ThirdPartyUser}
      />
      <Screens.Screen
        name={CREATE_POST_SCREEN_NAME}
        component={CreatePostScreen}
      />
    </Screens.Navigator>
  );
};

export default memo(ProfileRouter);
