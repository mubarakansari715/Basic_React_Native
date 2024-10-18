/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Demo from './basic/01FirstDemo';
import ReactFundamentals from './basic/02ReactFundamentals';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ReactFundamentals);
