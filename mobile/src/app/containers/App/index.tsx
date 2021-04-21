import React, { memo } from 'react';
import { View, Text } from 'react-native'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const App = () => {
  const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache(),
  });

  let a: any;

  client.query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `
  }).then((res) => console.log(res));
  return (<View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
    <Text>SOME TEXT</Text>
  </View>);
};

export default memo(App);
