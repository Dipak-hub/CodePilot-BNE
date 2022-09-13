import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen'
import AboutScreen from '../screen/AboutScreen';
import ContactScreen from '../screen/ContactScreen';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import { heightToDp, widthToDp } from '../utils';
import TopTabNavigator from './Top-tab-navigator';
import Header from '../Component/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import colors from '../utils/responsive/colors';
import { StyleSheet, Text, View } from 'react-native';



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
        backgroundColor:colors.primary,
        height:heightToDp(7.5)
      },
      headerShown: false,
      unmountOnBlur: true,}}
    >
      <Tab.Screen
    options={{
      tabBarShowLabel:false,
      tabBarIcon: ({ color, size,focused }) => (
        focused?(
          <>
          <View style={styles.iconContainerFocused}>
          <MaterialCommunityIcons name="home" color='white' size={20} />
          <Text style={{color:'white',marginLeft:widthToDp(2)}}>Home</Text>
          </View>
          </>
        ):(
          <MaterialCommunityIcons name="home" color='white' size={20} />
        )
      ),
    }}
      name="Home" component={TopTabNavigator} />
      <Tab.Screen name="AboutScreen" component={AboutScreen}
       options={{
        tabBarShowLabel:false,
        tabBarIcon: ({ color, size,focused }) => (
          focused?(
            <>
            <View style={styles.iconContainerFocused}>
            <MaterialCommunityIcons name="information" color='white' size={20} />
            <Text style={{color:'white',marginLeft:widthToDp(2)}}>About</Text>
            </View>
            </>
          ):(
            <MaterialCommunityIcons name="information" color='white' size={20} />
          )
        
        
        ),
      }}
       />
      <Tab.Screen name="ContactScreen" component={ContactScreen} 
       options={{
        tabBarShowLabel:false,
        tabBarIcon: ({ color, size,focused }) => (

          focused?(
            <>
            <View  style={styles.iconContainerFocused}>
            <MaterialIcons name="contact-phone" color='white' size={20} />
            <Text style={{color:'white',marginLeft:widthToDp(2)}}>Contact</Text>
            </View>
            </>
          ):(
            <MaterialIcons name="contact-phone" color='white' size={20} />
          )
      
        ),
      }}
      />
    </Tab.Navigator>
    </>
  )
}
const styles=StyleSheet.create({
  iconContainerFocused:{backgroundColor:'#bf6b71',width:widthToDp(30),height:heightToDp(4),borderRadius:50,flexDirection:'row',alignItems:'center',justifyContent:'center'}
})

export default BottomTabNavigator