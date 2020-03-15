import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Context} from './../context/BlogContext'

const ShowScreen = ({navigation, route}) =>{
    const { state } = useContext(Context)

    const blogPost = state.find((blogPost) => blogPost.id ===  route?.params.id)
   
return(
    <View>
        <Text>{blogPost.title}</Text>
    </View> 
)
}

const style = StyleSheet.create({})

export default ShowScreen;