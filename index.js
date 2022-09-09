/**
 * @format
 */
//  import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import 'react-native-gesture-handler';
import {name as appName} from './app.json';
import SideBar from './app/navigation/SideBar'
import BottomTabNavigator from './app/navigation/Bottom-tab-navigator';
import TopTabNavigator from './app/navigation/Top-tab-navigator';
import test from './app/navigation/test';
import Floatingbutton from './app/Component/Floating-button/Floating-button';


AppRegistry.registerComponent(appName, () => App);
