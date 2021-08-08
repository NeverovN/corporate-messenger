import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getStatusBarHeight } from 'react-native-status-bar-height';

// types
import { MainStackParamList } from 'app/types/routes';

// constants
import { BOTTOM_TAB_NAME, SHARED_STACK_NAME } from '@/app/constants/routes';
import { useStyles } from './styles';

// routers
import SharedRouter from '../Shared';
import BottomTab from '../BottomTab';

const MainStack = createStackNavigator<MainStackParamList>();

const MainRouter = () => {
  const styles = useStyles();
  return (
    <MainStack.Navigator
      screenOptions={{
        headerStyle: styles.headerStyle,
        headerLeft: () => null,
        gestureEnabled: false,
      }}>
      <MainStack.Screen name={BOTTOM_TAB_NAME} component={BottomTab} />
      <MainStack.Screen
        name={SHARED_STACK_NAME}
        component={SharedRouter}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
};

export default memo(MainRouter);
