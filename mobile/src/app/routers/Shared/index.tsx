import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// types
import { SharedStackParamList } from '@/app/types/routes';

// constants
import { SETTINGS_STACK_NAME } from '@/settings/constants/routes';

const SharedStack = createStackNavigator<SharedStackParamList>();

const SharedRouter = () => {
  return (
    <SharedStack.Navigator>
      <SharedStack.Screen name={SETTINGS_STACK_NAME} component={() => null} />
    </SharedStack.Navigator>
  );
};

export default memo(SharedRouter);
