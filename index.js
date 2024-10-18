/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import App from './App';
import Demo from './basic_react_native_course/01basicDemo/01_firstDemo';
import ReactFundamentals from './basic_react_native_course/02fundamentals/01_reactFundamentals';
import MyStyleSheet from './basic_react_native_course/03Styles/01_myFirstStyleSheet';

AppRegistry.registerComponent(appName, () => MyStyleSheet);
