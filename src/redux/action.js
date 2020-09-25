
const addPost = (post) => {

}



const postLoaded = description => (
  {
  type: POST_LOADED,
  payload: {
    description
  }
});

  export default action;





  const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};