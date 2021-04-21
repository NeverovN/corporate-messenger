import React, { memo } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const App = () => {

  const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache()
  });

  client.query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `
  }).then((res) => console.log(res));

  return <>{null}</>;
};

export default memo(App);
