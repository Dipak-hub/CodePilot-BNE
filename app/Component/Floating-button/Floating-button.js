import { StyleSheet, Text, View,Animated,TouchableWithoutFeedback, Image} from 'react-native'
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
     friction:5,
     useNativeDriver: true

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

//twitterIconPressed 

const handleTwitterPress=()=>{
    console.log("Pressed")
}
  return (
    <View style={styles.container}>
         <TouchableWithoutFeedback>
        <Animated.View style={[styles.button,styles.secondary,whatsapp]}>
           <MaterialCommunityIcons name='whatsapp' color={'#c23c45'} size={30}/>
        </Animated.View>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback>
        <Animated.View style={[styles.button,styles.secondary,facebook]}>
           <MaterialCommunityIcons name='facebook' color={'#c23c45'} size={30}/>
        </Animated.View>
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback onPress={()=>handleTwitterPress}>
        <Animated.View style={[styles.button,styles.secondary,twitter]}>
           <MaterialCommunityIcons name='twitter' color={'#c23c45'} size={30}/>
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
        borderRadius:48/2
     }
})