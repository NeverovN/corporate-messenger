import React, { FC, memo } from 'react';
import Toast from 'react-native-toast-message';

// routers
import NavigationProvider from '../../routers';
import ApolloProvider from 'app/contexts/Apollo';

interface IApp {}

const App: FC<IApp> = () => {
  return (
    <ApolloProvider>
      <NavigationProvider />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </ApolloProvider>
  );
};

export default memo(App);
