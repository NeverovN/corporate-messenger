import React, { FC, memo } from 'react';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

import Toast from 'react-native-toast-message';

// providers
import ApolloProvider from 'app/contexts/Apollo';
import { Provider } from 'react-redux';

// routers
import NavigationProvider from '../../routers';

// redux store
import { store } from 'common/redux/store';

interface IApp {}

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      primary: string;
      secondary: string;
      secondaryInactive: string;
      tint: string;

      incomingMessage: string;
      outgoingMessage: string;

      submitButton: string;
      submitButtonInactive: string;
      submitButtonText: string;

      white: string;
      black: string;
    }
  }
}

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
