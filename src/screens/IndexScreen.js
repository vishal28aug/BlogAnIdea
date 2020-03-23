import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { Context } from '../context/BlogContext'


const IndexScreen = ({navigation}) => {
  const { state, deleteBlogPost } = useContext(Context);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <TouchableOpacity onPress={() => navigation.navigate('ShowBlog',{id:item.id})}>
          <View style={styles.row}>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
              <FontAwesome5 style={styles.icon} name='trash' />
            </TouchableOpacity>
          </View>
          </TouchableOpacity>
        }} />
          <TouchableOpacity
          onPress= {() => navigation.navigate('CreateBlog')}
          activeOpacity={0.7}
          style={styles.floatingButton}>
         <FontAwesome5 style={styles.addFolatingButtonIcon} name='plus' />
         </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24,
    color: 'red'
  },  
  floatingButton: {
    position: 'absolute',
    right: 20,
    top:480,
    borderWidth:15,
    borderRadius:50,
    borderColor:'blue'
  },  
  addFolatingButtonIcon: {
    fontSize:32,
    color:'white',
    backgroundColor:'blue'
  }
 
});

export default IndexScreen;