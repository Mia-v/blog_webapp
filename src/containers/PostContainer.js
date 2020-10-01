import React from 'react';
import { useSelector } from 'react-redux';
import Post from '../components/Post/Post';

const PostContainer = ({match}) => {
  const id = match.params.id;
  const post = useSelector(state => state.posts.find(p => p.postId === Number(id)));
  
  return <Post {...post} />
}

export default PostContainer;