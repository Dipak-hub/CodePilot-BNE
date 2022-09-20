import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import YoutubePlayer from 'react-native-youtube-iframe';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideoLink } from '../../store';
const YoutubeComponent = ({id}) => {

  const {video_link}=useSelector((state)=>state.posts)


  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getVideoLink())
  },[])
  return (
    <View>
    <YoutubePlayer
      height={250}
      play={false}
      videoId={id}
    />
  </View>
  )
}

export default YoutubeComponent

const styles = StyleSheet.create({})