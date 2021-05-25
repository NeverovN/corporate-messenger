import { ApolloProvider } from '@apollo/client';
import React, { FC, memo } from 'react';

import initApolloClient from 'app/api/Apollo/init';

const apolloClient = initApolloClient();

interface UApolloContextProviderProps {
  children: React.ReactNode;
}

// TODO: manage apollo client to handle token manipulation
const ApolloContextProvider: FC<UApolloContextProviderProps> = ({
  children,
}) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default memo(ApolloContextProvider);
