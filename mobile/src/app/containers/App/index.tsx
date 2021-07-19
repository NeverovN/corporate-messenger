import React, { FC, memo } from 'react';
import Toast from 'react-native-toast-message';

// routers
import NavigationProvider from '../../routers';
import ApolloProvider from 'app/contexts/Apollo';
import { Provider } from 'react-redux';

// redux store
import { store } from 'common/redux/store';

interface IApp {}

const App: FC<IApp> = () => {
  return (
    <Provider store={store}>
      <ApolloProvider>
        <NavigationProvider />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </ApolloProvider>
    </Provider>
  );
};

export default memo(App);
