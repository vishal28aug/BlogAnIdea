import React, { useContext, useState,  } from 'react';
import { StyleSheet, } from 'react-native';

import { Context } from './../context/BlogContext'
import BlogPostForm from './../components/BlogPostForm'


const CreateScreen = ({ navigation, route }) => {
  const [id] = useState(Math.floor(Math.random() * 99999))
  const { addBlogPost } = useContext(Context);
  return (
 <BlogPostForm onSubmit={(title, content)=>{
   addBlogPost(id, title, content, () => navigation.navigate('ShowBlog',{id}))
 }}/>
  )
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  lable: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
})

export default CreateScreen;