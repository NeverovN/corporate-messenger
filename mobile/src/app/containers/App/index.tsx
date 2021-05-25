import React, { FC, memo } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// routers
import NavigationProvider from '../../routers';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

interface IApp {}

const App: FC<IApp> = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationProvider />
    </ApolloProvider>
  );
};

export default memo(App);
