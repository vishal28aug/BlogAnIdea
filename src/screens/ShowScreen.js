import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { Context } from './../context/BlogContext'


const ShowScreen = ({ navigation, route }) => {
  const { state } = useContext(Context)

  const blogPost = state.find((blogPost) => blogPost.id === route?.params.id)

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
};


const styles = StyleSheet.create({})

export default ShowScreen;