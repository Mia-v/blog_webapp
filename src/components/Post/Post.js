import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
//import Comments from './Comments/Comments';
import './Post.scss';


function Post(post) {


  const { title, tags, textContent, img } = post;

  return (
    <div className="singlePost">
      <span></span>
      <h2 className="postTitle" id={`post-${post.postId}`}><Link to={`/posts/${post.postId}`} id="title">{title}</Link></h2>
      <div className="tags">{post.tags.map(tag => <span  className="spanTag">{tag}</span>)}</div>
      <img className="postImg" src={`/static/media/${img}`} alt={title} />
      <p className="postTextContent">{textContent}</p>
    </div>
  );

}

export default Post;