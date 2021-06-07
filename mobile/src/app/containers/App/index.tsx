import React, { FC, memo } from 'react';
// routers
import NavigationProvider from '../../routers';
import ApolloProvider from 'app/contexts/Apollo';

interface IApp {}

const App: FC<IApp> = () => {
  return (
    <ApolloProvider>
      <NavigationProvider />
    </ApolloProvider>
  );
};

export default memo(App);
