import { fontSize } from '@mui/system';
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import Floatingbutton from '../Component/Floating-button/Floating-button';
import { getCategories } from '../store';

function HomeScreen({navigation}) {
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
    // navigation.setOptions({tabBarStyle: {display: 'none'}});
  };
  const dispatch=useDispatch()

  const {categories,is_loading,}=useSelector((state)=>state.categories)

  useEffect(()=>{
    dispatch(getCategories())
  },[])


  return (
    <>
    <Floatingbutton/>

     </>
  )
}
const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

export default HomeScreen