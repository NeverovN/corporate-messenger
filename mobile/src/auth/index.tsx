import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Auth from './components/Auth';
import Feed from './components/Feed';
import Screens from './routers/index';

const AppScreen = () => {
  return (
    <NavigationContainer>
      <Screens.Navigator initialRouteName="Auth">
        <Screens.Screen name="Auth" component={Auth} />
        <Screens.Screen name="Feed" component={Feed} />
      </Screens.Navigator>
    </NavigationContainer>
  );
};

export default AppScreen;
