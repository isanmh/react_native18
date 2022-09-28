/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App';

// untuk menghilangkan warning
LogBox.ignoreLogs([
  'AsyncStorage has been extracted from react-native core',
  'Setting a timer',
  'VirtualizedLists should never be nested',
  'Possible Unhandled Promise Rejection',
]);

AppRegistry.registerComponent(appName, () => App);
