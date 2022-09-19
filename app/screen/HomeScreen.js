import { fontSize } from '@mui/system';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { setUseProxies } from 'immer';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import Floatingbutton from '../Component/Floating-button/Floating-button';
import NewsCard from '../Component/News-Card/News-Card';
import YoutubeComponent from '../Component/Youtube-Component/Youtube-Component';
import { getAllPosts, getCategories } from '../store';
import colors from '../utils/responsive/colors';

function HomeScreen({navigation}) {




  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
    // navigation.setOptions({tabBarStyle: {display: 'none'}});
  };
  const dispatch=useDispatch()
  const [page,setPage]=useState(1)
  const [refresh,setRefresh]=useState(false)
  

  const {categories,is_loading,}=useSelector((state)=>state.categories)
  
  const [allPosts,setAllPosts]=useState([])
  const [link,setLink]=useState('')
  const [isLoadingFinished,setIsLoadingFinished]=useState(false)

  
  const fetchPosts=async()=>{
    const res= await axios.get(`https://www.business-northeast.com/wp-json/wp/v2/posts?per_page=20&page=${page}&_embed`)
    setAllPosts([...allPosts,...res.data])
    setIsLoadingFinished(true)
  }

  const fetchVideos=async()=>{
    let word="src=\"https://www.youtube.com/embed"
    const response = await axios.get(`https://www.business-northeast.com/wp-json/wp/v2/posts?categories=7051&_embed&per_page=${page}&filter[orderby]=date&order=desc`)
   findFirstVideo(response.data[0].content.rendered, word)
  }
 
   const fetchMoreData=()=>{
   setPage(page+1)
  }

function renderYoutube(){
  return(
    <YoutubeComponent
    id={link} />
  )
}

  function renderLoader(){
    return(
      <View style={styles.ActivityIndicator}>
      <ActivityIndicator size={'large'} color={colors.primary} />
    </View>
    )
    
  }
  const handleRefresh=async()=>{
    setRefresh(true)
    const res= await axios.get(`https://www.business-northeast.com/wp-json/wp/v2/posts?per_page=20&page=${page}&_embed`)
   setAllPosts(res.data)
   setRefresh(false)
  }

  function findFirstVideo(text, word){
    // console.log(text.length)
    const myArray = text.split(" ");

    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    var match = text.match(regExp);

    // console.log(match[2].slice(0,11))
    if (match) {
      setLink(match[2].slice(0,11))
    } else {
      console.log("Not found")
    }
    
    // var x = 0, y=0;
   
    // for (i=0;i< text.length;i++)
    //     {
    //     if(text[i] == word[0])
    //         {
    //           console.log(text)
    //         for(j=i;j< i+word.length;j++)
    //            {
    //             if(text[j]==word[j-i])
    //               {
    //                 y++;
    //               }
    //             if (y==word.length){
    //                 x++;
    //             }
    //         }
    //         y=0;
    //     }
    // }
    // console.log("'"+word+"' was found "+x+" times.");
}

  useEffect(()=>{
    dispatch(getCategories())
    fetchPosts()
    fetchVideos()
  },[page])


  return (
    <>
<SafeAreaView style={{flex: 1}}>
    <FlatList
    key={allPosts.id}
    contentContainerStyle={{flexGrow:1}}
    keyExtractor={item=>item.id}
    data={allPosts}
    renderItem={({item})=>(
      <NewsCard news={item} />
    )}
    ListFooterComponent={renderLoader}
    onEndReachedThreshold={0}
    onEndReached={fetchMoreData}
    ListHeaderComponent={renderYoutube}
    refreshing={refresh}
    onRefresh={handleRefresh}
   
    />
    </SafeAreaView>
  
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
  ActivityIndicator:{
    marginVertical:16,
    alignItems:'center'
  }
});

export default HomeScreen