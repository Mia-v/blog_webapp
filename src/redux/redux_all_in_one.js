import { createStore } from 'redux';

const initialState = {
    posts:[]
};


// Actions

const POSTS_LOADED = 'POSTS_LOADED';
const SINGLE_POST_LOADED = 'SINGLE_POST_LOADED';
const NEW_POST = 'NEW_POST';


const showList = () => {
  return{
    type: POSTS_LOADED,
    payload: {
      state: initialState
    }
  }
}

export const addNewPost = newPost => {
  return{
    type: NEW_POST,
    payload: {
      postId: newPost.postId,
      title: newPost.title,
      tags: newPost.tags.split(","),
      img: newPost.img,
      textContent: newPost.textContent
    }
  }
}

// Reducers


const postsReducer = (state=initialState, action) => {
  switch (action.type) {
    case POSTS_LOADED: {
      return {
        posts: [
          ...action.payload,
        ],
      };
    };

    case SINGLE_POST_LOADED: {
      console.log(state);
      return action.payload
      

    }

    case NEW_POST: {
      state.posts.push({
        postId: action.payload.postId,
        title: action.payload.title,
        tags: action.payload.tags,
        textContent: action.payload.textContent
      });
      return state;
    }
    
    default: {
      return state;
    }
  };
};

// Store

const store = createStore(postsReducer, initialState);


export default store;