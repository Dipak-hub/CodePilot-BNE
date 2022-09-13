import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SplashScreen from '../screen/SplashScreen';
import { scale } from '../utils';
import LoginScreen from '../screen/LoginScreen';
import OtpScreen from '../screen/OtpScreen';
import HomeScreen from '../screen/HomeScreen.js';
import SideBar from './SideBar';
import PostByCategory from '../Component/Post-by-category/Post-By-Category';
import DescriptionScreen from '../screen/DescriptionScreen';
function Routes() {
    const Stack=createNativeStackNavigator()
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='SplashScreen'  screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen  name="SplashScreen" component={SplashScreen} />
        <Stack.Screen  name="LoginScreen" component={LoginScreen} />
        <Stack.Screen  name="OtpScreen" component={OtpScreen} />
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen}/> */}
        <Stack.Screen name="SideBar" component={SideBar} />
        <Stack.Screen name="PostByCategory" component={PostByCategory} />
       
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Routes