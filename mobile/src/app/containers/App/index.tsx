import React, { FC, memo } from 'react';

// routers
import AppNavigator from '../../routers/index';

interface IApp {}

const App: FC<IApp> = () => {
  return <AppNavigator />;
};

export default memo(App);
