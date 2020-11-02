import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from '../components/Post/Post';

const PostContainer = ({match}) => {
  const dispatch = useDispatch();
  const { id } = match.params;
  // const post = useSelector(state => state.posts.find(p => p.postId === Number(id)));
  const post = useSelector(state => state);

  useEffect(() => {
    console.log(id);
    console.log(`http://localhost:8000/posts/${id}`);
    fetch(`http://localhost:8000/posts/${id}`)
      .then(resp => resp.json())
      .then(payload => {
        dispatch({
          type: 'SINGLE_POST_LOADED',
          payload,
        });
      });
  }, [])
  
  return <Post {...post} />
}

export default PostContainer;