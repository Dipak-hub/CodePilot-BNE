import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from "../screen/HomeScreen"
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screen/LoginScreen';
import OtpScreen from '../screen/OtpScreen';
import Article from '../Component/Top-Screens/Article'
import Video from '../Component/Top-Screens/Video'
import Northeast from '../Component/Top-Screens/Northeast'
import National from '../Component/Top-Screens/National';
import International from '../Component/Top-Screens/International'
import { widthToDp } from '../utils';
import colors from '../utils/responsive/colors';

const Tab = createMaterialTopTabNavigator();
function TopTabNavigator() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: { fontSize: 12 },
      tabBarItemStyle: { width: widthToDp(28) },
      tabBarScrollEnabled:true,
      tabBarIndicatorStyle:{
        backgroundColor:colors.primary
      }
    }}
    >
    <Tab.Screen
    name="HOME" options={{
      tabBarLabelStyle: { fontWeight: 'bold' },
    }} component={HomeScreen} />
    <Tab.Screen
    options={{
      tabBarLabelStyle: { fontWeight: 'bold' },
    }}
    name="VIDEO" component={Video} />
    <Tab.Screen  options={{
      tabBarLabelStyle: { fontWeight: 'bold' },
    }}  name="ARTICLE" component={Article} />
    <Tab.Screen 
    options={{
      tabBarLabelStyle: { fontWeight: 'bold' },
    }}
    name="NORTHEAST" component={Northeast} />
    <Tab.Screen
    options={{
      tabBarLabelStyle: { fontWeight: 'bold' },
    }}
    name="NATIONAL" component={National} />
    <Tab.Screen
    options={{
      tabBarLabelStyle: { fontWeight: 'bold' },
    }}
    name="INTERNATIONAL" component={International} />
  </Tab.Navigator>
  )
}

export default TopTabNavigator