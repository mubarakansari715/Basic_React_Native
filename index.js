/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import App from './App';
import Demo from './basic_react_native_course/01basicDemo/01_firstDemo';
import ReactFundamentals from './basic_react_native_course/02fundamentals/01_reactFundamentals';
import MyStyleSheet from './basic_react_native_course/03Styles/01_myFirstStyleSheet';
import Compose from './basic_react_native_course/03Styles/02_compose';
import Fletten from './basic_react_native_course/03Styles/03_fletten';
import AbsoluteFill from './basic_react_native_course/03Styles/04_absoluteFill';
import AbsoluteFillObject from './basic_react_native_course/03Styles/05_absoluteFillObject';
import HairlineWidth from './basic_react_native_course/03Styles/06_hairlineWidth';
import States from './basic_react_native_course/04StateandProps/01_states';
import Timers from './basic_react_native_course/05Timers/01_timers';

AppRegistry.registerComponent(appName, () => Timers);