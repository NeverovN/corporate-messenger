import React, { FC, memo } from 'react';

// routers
import NavigationProvider from '../../routers';

interface IApp {}

const App: FC<IApp> = () => {
  return <NavigationProvider />;
};

export default memo(App);
