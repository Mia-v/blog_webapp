import React, { useState, useEffect} from 'react';
import './Post.scss';
import { Route } from 'react-router-dom'; 
import { useSelector } from 'react-redux';
//import Comments from ',.Comments/Comments';


function Post (post){

  
  const { title, tags, textContent, img }  = post;
  const isOnly = false;
  
  return (
    <div className="singlePost">
   <h2 className = "postTitle" id={`post-${post.postId}`}>{title}</h2>
   <div className="tags">{post.tags.map( tag => <span className="spanTag">{tag}</span>)}</div>
    <figure>
        <img className = "postImg" src={img} alt={title} />
        <figcaption>{title}</figcaption>
    </figure>
    <p className = "postTextContent">{textContent}</p>
  </div>
  );
  
}

export default Post;