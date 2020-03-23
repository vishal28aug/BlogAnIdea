import React, {useState}from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({onSubmit, initialValues}) => {
    const [title, setTitle] = useState(initialValues?.title || '');
    const [content, setContent] = useState(initialValues?.content || '');

return(
    <View>
    <Text style={styles.lable}>Enter New Title</Text>
    <TextInput
      style={styles.input}
      onChangeText={(text) => setTitle(text)}
      value={title} />
    <Text style={styles.lable}>Enter New Content:</Text>
    <TextInput
      style={styles.input}
      onChangeText={(text) => setContent(text)}
      value={content} />
    <Button
      title="Save Blog"
      onPress={() => onSubmit(title, content)}
     />
  </View>
)
}

//Provides the initia values 
BlogPostForm.defaultProps = {
    initialValues:{
        title:'',
        content:''
    }
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

  export default BlogPostForm