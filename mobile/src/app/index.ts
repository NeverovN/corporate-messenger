import { AppRegistry } from 'react-native';

import App from './containers/App';

import { name as appName } from 'root/app.json';

export function initApp() {
  AppRegistry.registerComponent(appName, () => App);
}
