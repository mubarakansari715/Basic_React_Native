/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Demo from './FirstDemo';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Demo);
