import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { Context } from '../context/BlogContext'


const IndexScreen = ({navigation}) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  return (
    <View>
      <Button title='Add Post' onPress={addBlogPost} />
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
  }
});

export default IndexScreen;