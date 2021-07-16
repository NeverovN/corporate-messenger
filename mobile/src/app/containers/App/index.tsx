import React, { FC, memo } from 'react';
import Toast from 'react-native-toast-message';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';

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

PushNotification.configure({
  onRegister: function (token) {
    console.log('TOKEN:', token);
  },

  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
    // TODO: process the notification
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  onAction: function (notification) {
    console.log('ACTION:', notification.action);
    console.log('NOTIFICATION:', notification);

    // TODO: process the notification
  },

  onRegistrationError: function (err) {
    console.error(err.message, err);
  },

  // IOS ONLY
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  popInitialNotification: true,

  requestPermissions: true,
});

export default memo(App);
