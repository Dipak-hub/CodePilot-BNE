import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../Header'
import { useDispatch, useSelector } from 'react-redux'
import { getPostByCategory } from '../../store'

const PostByCategory = ({route}) => {
    const {id,screenName}=route.params
    const {posts,is_loading}=useSelector((state)=>state.posts)
    const dispatch=useDispatch()

    useEffect(()=>{
      dispatch(getPostByCategory(id))
    },[])
  return (
    <>
    <Header
    hasScreenName={true}
    screeName={screenName}
    hasBackButton={true}
    />
    <View>
      <Text style={{color:'black'}}>Post-By-Category</Text>
    </View>
    </>
  )
}

export default PostByCategory

const styles = StyleSheet.create({})