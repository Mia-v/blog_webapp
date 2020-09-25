import * as actions from './action';
import store from '../store';

const postsReducer = (state = store.initialState, action) => {
  switch (action.type) {
  //   case 'POSTS_LOADED': {
  //     return action;
  //   };

  //   default: {
      return state;
  //   }
  // };
};

export default posts;




const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};