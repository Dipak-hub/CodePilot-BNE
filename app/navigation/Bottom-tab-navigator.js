import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen'
import AboutScreen from '../screen/AboutScreen';
import ContactScreen from '../screen/ContactScreen';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { heightToDp } from '../utils';
import TopTabNavigator from './Top-tab-navigator';
import Header from '../Component/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'



const Tab = createBottomTabNavigator();

function BottomTabNavigator({navigation}) {
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
    // navigation.setOptions({tabBarStyle: {display: 'none'}});
  };
  return (
<>
  <Header
   openDrawer={openDrawer}
    hasDrawer={true}
    hasBackButton={false}
    hasLogo={true}/>


    <Tab.Navigator
    screenOptions={{
      tabBarStyle:{
        backgroundColor:'#c23c45',
        height:heightToDp(7.5)
      },
      headerShown: false,
      unmountOnBlur: true,}}
    >
      <Tab.Screen
    options={{
      tabBarShowLabel:false,
      tabBarIcon: ({ color, size,focused }) => (
        <MaterialCommunityIcons name="home" color='white' size={20} />
      ),
    }}
      name="Home" component={TopTabNavigator} />
      <Tab.Screen name="AboutScreen" component={AboutScreen}
       options={{
        tabBarShowLabel:false,
        tabBarIcon: ({ color, size,focused }) => (
          <MaterialCommunityIcons name="information" color='white' size={20} />
        ),
      }}
       />
      <Tab.Screen name="ContactScreen" component={ContactScreen} 
       options={{
        tabBarShowLabel:false,
        tabBarIcon: ({ color, size,focused }) => (
          <MaterialIcons name="contact-phone" color='white' size={20} />
        ),
      }}
      />
    </Tab.Navigator>
    </>
  )
}

export default BottomTabNavigator