import React from 'react';
import { Link } from 'react-router-dom';
//import Comments from './Comments/Comments';
import './Post.scss';


function Post(post) {
  const { postId, title, tags, textContent, img } = post;
  return (
    <div className="singlePost">
      <span></span>
      <h2 className="postTitle" id={`post-${postId}`}>
        <Link to={`/posts/${postId}`} id="title">{title}</Link>
      </h2>
      <div className="tags">
        {tags && 
          (tags.map(tag => { 
            return (
                <ul>
                  <li key={tag} className="spanTag">{tag}</li>
                </ul>
            );
          })
          )
        }
      </div>
      <img className="postImg" src={`/img/${img}`} alt={title} />
      <p className="postTextContent">{textContent}</p>
    </div>
  );
}

export default Post;