import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Button, View } from 'react-native';
import CustomDrawer from './Custom-Drawer';
import HomeScreen from '../screen/HomeScreen';
import BottomTabNavigator from './Bottom-tab-navigator';
import DescriptionScreen from '../screen/DescriptionScreen';


const Drawer = createDrawerNavigator();

function SideBar() { 
  return (
    <Drawer.Navigator
    screenOptions={{
      headerShown: false,
      unmountOnBlur: true,}}
    drawerContent={(props) => <CustomDrawer {...props} />}
  >
    <Drawer.Screen
    options={{drawerLabel:'Home'}} name="BottomTab" component={BottomTabNavigator} />
      <Drawer.Screen
     name="Description" component={DescriptionScreen} />
  </Drawer.Navigator>
  );
}

export default SideBar