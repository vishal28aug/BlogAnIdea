import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { Context } from './../context/BlogContext'
import BlogPostForm from './../components/BlogPostForm'

const CreateScreen = ({ navigation, route }) => {
  const selectedBlogId = route?.params.id;
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === selectedBlogId)

  return (
    <BlogPostForm 
    initialValues={{title:blogPost.title, content:blogPost.content}}
    onSubmit={(title,content) => {
      editBlogPost(selectedBlogId, title, content, () => navigation.pop())
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