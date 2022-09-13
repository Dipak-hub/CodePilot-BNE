
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import React, { useState } from 'react'
import { Button, Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../Component/Header'
import { sendOtp } from '../store/slice/auth-slice'
import { heightToDp, scale, widthToDp } from '../utils'
import colors from '../utils/responsive/colors'
function LoginScreen() {
const navigation=useNavigation()
const dispatch=useDispatch()
  const[borderBottomColor,setBottomBorderColor]=useState('gray')
  const [phoneNumber, setPhoneNumber] = useState('');

  const {loading,isLoggedIn}=useSelector((state)=>state.auth)

 console.log(isLoggedIn)
  const handleFocus=()=>{
    setBottomBorderColor('green')
  }
  const handleChange=num=>{
    setPhoneNumber(num)
  if(num.length===10){
    Keyboard.dismiss();
  }
  }

  const getOtp=()=>{
    dispatch(sendOtp(phoneNumber)).unwrap().then(()=>{
      
      navigation.navigate('OtpScreen')
    }).catch((e)=>{
     alert('Something went wrong!!!!')
    })
    // try{
    //   const res=await axios.get(`http://2factor.in/API/V1/4cd1c359-d970-11eb-8089-0200cd936042/SMS/${phoneNumber}/AUTOGEN`)
    //   console.log(res.data)
    //   if(res.data.Status){
    //     navigation.navigate('OtpScreen')
    //   }
    // }
    // catch(e){
    //   console.log(e)
    // }
    
  }
  return (
    <>
    <Header
    hasLogo={false}
    hasBackButton={false}
    />
    <View style={styles.container}>
     
    <Image resizeMode='contain' style={styles.Image} source={require('../assets/access_account.png')} ></Image>
   <TextInput
   onChangeText={num=>handleChange(num)}
   maxLength={10}
   onFocus={handleFocus}
   keyboardType='phone-pad'
   placeholder='Phone Number'
   placeholderTextColor={'gray'}
   style={[styles.textInput,{borderBottomColor:borderBottomColor}]}/>
   <TouchableOpacity onPress={()=>getOtp()} style={styles.button}>
    <Text style={styles.buttonText}>SEND OTP</Text>
   </TouchableOpacity>
  </View>
  </>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  Image:{
    marginBottom:heightToDp(-6),
    height:heightToDp(50),
    width:widthToDp(50)
  },
  textInput:{
    color:'black',
    width:widthToDp(95),
    fontSize:scale(5),
    borderBottomWidth:scale(0.5),
  },
  button:{
      marginTop: heightToDp(3),
      justifyContent: 'center',
      width: '95%',
      height: heightToDp(6),
    backgroundColor:colors.primary,
      alignItems: 'center',
  },
  buttonText:{
    color:'white'
  }
})

export default LoginScreen