import React, { FC, memo } from 'react';

// routers
import AppNavigatorContainer from '../../routers/Main/index';

interface IApp {}

const App: FC<IApp> = () => {
  return <AppNavigatorContainer />;
};

export default memo(App);
