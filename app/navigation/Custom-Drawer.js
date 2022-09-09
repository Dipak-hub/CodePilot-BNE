import AsyncStorage from "@react-native-community/async-storage";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Headline, Subheading } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../store";
import { authStateClear } from "../store/slice/auth-slice";
import { heightToDp, scale, widthToDp } from "../utils";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

function CustomDrawer(props) {

const dispatch=useDispatch()
const navigation=useNavigation()

const {categories,is_loading,}=useSelector((state)=>state.categories)

useEffect(()=>{
  dispatch(getCategories())
},[])

  const logout=async()=>{
    try {
      await AsyncStorage.clear();
    dispatch(authStateClear)
      navigation.replace('LoginScreen');
    } catch (e) {
      // saving error
    }
  }
    return (
      <DrawerContentScrollView   {...props}>
         <View style={style.logoutButton}>
              <TouchableOpacity onPress={logout}>
            <FontAwesomeIcon style={{marginTop:heightToDp(3),marginLeft:widthToDp(2),left:widthToDp(50)}} name="power-off" color='white' size={40} />
            <Text style={{fontSize:10,marginLeft:widthToDp(1)}}>Log out</Text>
            </TouchableOpacity>
            </View>
        <View style={style.headerContainer}>
            <View>
                <Subheading style={style.headerName}>Welcome to</Subheading>
                <Headline style={style.headerType}>Business Northeast</Headline>
            </View>
           
        </View>

        <DrawerItemList {...props} />

        {
          categories?.map((e)=>{
            return(
              <DrawerItem
              key={e.id}
          label={e.name}
          onPress={() =>navigation.navigate('PostByCategory',{id:e.id,screenName:e.name})}
        />
            )
          })
        }
      </DrawerContentScrollView>
    );
  }

  const style= StyleSheet.create({
    headerContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: heightToDp(1),
      backgroundColor: '#c23c45',
      paddingHorizontal: widthToDp(4),
      paddingTop: heightToDp(6),
      paddingBottom: heightToDp(2),
      height:heightToDp(13),
      marginTop:heightToDp(-2)
    },
    headerName:{
      color:'white',
    },
    headerType:{
      color:'white',
      fontWeight:'bold'
    },
    logoutButton:{
      flex:1,
      backgroundColor: '#c23c45',
    }
  })

  export default CustomDrawer