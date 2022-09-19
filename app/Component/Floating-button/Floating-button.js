import { StyleSheet, Text, View,Animated,TouchableWithoutFeedback, Image,Linking} from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { heightToDp, widthToDp } from '../../utils';



const animation= new Animated.Value(0)
let open=false;

function toggleMenu(){
 const toValue=open ? 0 : 1

 Animated.spring(animation,{
     toValue,
     friction:6,
     useNativeDriver: false

 }).start()
 open=!open
}
const Floatingbutton = () => {


    const twitter={
        transform:[
            
                {scale:animation},
                {
                    translateY: animation.interpolate({
                        inputRange:[0,1],
                        outputRange:[0,-80]
                    })
                }
            
        ]
    }

    const facebook={
        transform:[
            
                {scale:animation},
                {
                    translateY: animation.interpolate({
                        inputRange:[0,1],
                        outputRange:[0,-140]
                    })
                }
            
        ]
    }

    const whatsapp={
        transform:[
            
                {scale:animation},
                {
                    translateY: animation.interpolate({
                        inputRange:[0,1],
                        outputRange:[0,-200]
                    })
                }
            
        ]
    }

    const email={
        transform:[
            
                {scale:animation},
                {
                    translateY: animation.interpolate({
                        inputRange:[0,1],
                        outputRange:[0,-260]
                    })
                }
            
        ]
    }

    const instagram={
        transform:[
            
                {scale:animation},
                {
                    translateY: animation.interpolate({
                        inputRange:[0,1],
                        outputRange:[0,-320]
                    })
                }
            
        ]
    }
   
   const rotation={
    transform:[
        {
            rotate:animation.interpolate({
                inputRange:[0,1],
                outputRange:["0deg", "45deg"]
            })
        }
    ]
}

  return (
    <View style={styles.container}>
         <TouchableWithoutFeedback onPress={()=>Linking.openURL("https://www.instagram.com/_businessnortheast_/")}>
        <Animated.View style={[styles.button,styles.secondary,instagram]}>
           <MaterialCommunityIcons name='instagram' color={'#ffffff'} size={25}/>
        </Animated.View>
    </TouchableWithoutFeedback>
         <TouchableWithoutFeedback onPress={()=>Linking.openURL("mailto:mail@business-northeast.com")}>
        <Animated.View style={[styles.button,styles.secondary,email]}>
           <MaterialCommunityIcons name='email' color={'#ffffff'} size={25}/>
        </Animated.View>
    </TouchableWithoutFeedback>
         <TouchableWithoutFeedback onPress={()=>Linking.openURL("https://api.whatsapp.com/send/?phone=916026176848&text&app_absent=0")}>
        <Animated.View style={[styles.button,styles.secondary,whatsapp]}>
           <MaterialCommunityIcons name='whatsapp' color={'#ffffff'} size={25}/>
        </Animated.View>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback onPress={()=>Linking.openURL("https://www.facebook.com/businessssnortheast/")}>
        <Animated.View style={[styles.button,styles.secondary,facebook]}>
           <MaterialCommunityIcons name='facebook' color={'#ffffff'} size={25}/>
        </Animated.View>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback onPress={()=>Linking.openURL("https://twitter.com/BusinessNorthe1")}>
        <Animated.View style={[styles.button,styles.secondary,twitter]}>
           <MaterialCommunityIcons name='twitter' color={'#ffffff'} size={25}/>
        </Animated.View>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback onPress={()=>toggleMenu()}>
        <Animated.View style={[styles.button,styles.menu,rotation]}>
          <Image source={require('../../assets/fab.png')} style={{height:heightToDp(10),width:widthToDp(25)}} />
        </Animated.View>
    </TouchableWithoutFeedback>
    
    </View>
  )
}

export default Floatingbutton

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        position:'absolute',
        bottom:80,
        right:50,
    },
    button:{
        backfaceVisibility:'hidden',
        position:'absolute',
        borderRadius:100,
        width:45,
        height:45,
        alignItems:'center',
        justifyContent:'center',
        shadowRadius:15,
        shadowOpacity:0.3,
        shadowColor:'gray',
        shadowOffset:{height:10}
     },
     menu:{
        backgroundColor:'white',
        backfaceVisibility:'hidden',

     },
     secondary:{
        width:48,
        height:48,
        borderRadius:48/2,
        backgroundColor:'#c23c45'
     }
})