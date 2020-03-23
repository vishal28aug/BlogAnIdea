import createDataContext from './createDataContext';


const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogPost': {
      return [...state, {
        id: action.payload.id,
        title: action.payload.title,
        content: action.payload.content
      }];
    }

    case 'delete_blogPost': {
      return state.filter((blogPost) => blogPost.id !== action.payload)
    }

    case 'edit_blogPost':{
      return state.map((blogPost)=>{
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      })
    }

    default:
      return state;
  }
}
const addBlogPost = (dispatch) => {
  return (id,title,content,callback) => {
    dispatch({ type: 'add_blogPost', payload:{id,title,content} });
    if(callback) callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: 'delete_blogPost', payload: id })
  }
}

const editBlogPost = (dispatch) =>{
  return (id, title, content, callback) =>{
    dispatch({type:'edit_blogPost', payload:{id,title,content}})
    if(callback) callback();
  }
}


export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{id:1,title:'test',content:'testsdfg sdg drg '}]);