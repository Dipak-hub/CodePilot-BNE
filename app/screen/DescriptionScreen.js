
import { style } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import Header from '../Component/Header'
import { heightToDp, scale, widthToDp } from '../utils' 
import HtmlText from 'react-native-html-to-text'
import colors from '../utils/responsive/colors'

function DescriptionScreen({route}) {
  const {slug}=route.params

  const [data,setData]=useState({})

  const [loading,setLoading]=useState(false)

  const fetchPostBySLug=async()=>{
    const res=await axios.get(`https://www.business-northeast.com/wp-json/wp/v2/posts?_embed&slug=${slug}`)
    setData(res.data)
    setLoading(true)
  }
  console.log(data[0]?.title?.rendered)
  useEffect(()=>{
    fetchPostBySLug()
  },[])
  return (
<>
    <Header
     hasLogo={false}
     hasBackButton={true}/>
{
  loading?(
    <ScrollView style={styles.container}>
    <Image resizeMode='contain'style={styles.bannerImage} source={{uri: data[0]?.yoast_head_json?.og_image[0]?.url}} ></Image>
    <Text style={styles.headLine}>{data[0]?.title?.rendered}</Text>
    <HtmlText html={data[0]?.content?.rendered}></HtmlText>
    </ScrollView>
  ):(
    <ActivityIndicator size={'large'} color={colors.primary} />
  )
}
  
   </>
  )
}
const styles=StyleSheet.create({
  container:{
    flexDirection:'column'
  },
  bannerImage:{
    width:widthToDp(100),
    height:heightToDp(50),
    marginTop:heightToDp(-8)
  },
  headLine:{
    fontSize:scale(4.8),
    color:'black',
    fontWeight:'bold',
  }
})
export default DescriptionScreen