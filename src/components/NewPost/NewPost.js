import React, { useState, useEffect } from 'react';
import './NewPost.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addNewPost } from '../../redux/redux_all_in_one';
import { addTag } from '../../redux/redux_all_in_one';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold } from '@fortawesome/free-solid-svg-icons';
import { faItalic } from '@fortawesome/free-solid-svg-icons';
import { faUnderline } from '@fortawesome/free-solid-svg-icons';


const NewPost = () => {

  const [title, setTitle] = useState('');
  const [textContent, setTextContent] = useState('');
  const [tags, setTags] = useState('');


  const dispatch = useDispatch();

  const handleChangeTitle = (e) => setTitle(e.target.value);
  const handleChangeTextContent = (e) => setTextContent(e.target.value);
  const handleChangeTags = (e) => setTags(e.target.value);

  let postId = useSelector(state => state.posts[state.posts.length - 1].postId + 1);


  const handleAddNewPost = (e) => {
    console.log(title, textContent);
    e.preventDefault();
    if (title && textContent) {
      dispatch(
        addNewPost({
          postId,
          title,
          tags,
          textContent
        })
        )
        setTitle('');
        setTags('');
        setTextContent('');
      }
  }


  return (
    <form className = "formNewPost" onSubmit={handleAddNewPost}>
      <input name={title} onChange={handleChangeTitle} placeholder="Title of new post"/>
      <label>Tags (use comma to split each tag):</label><input name={tags} onChange={handleChangeTags}/>
      <textarea className="newPostInput" name={textContent} onChange={handleChangeTextContent} placeholder="Text of new post" >{textContent}</textarea>
      <label>Password</label>
      <input name='password' type="password" required/> 
      <button type="submit">Add new post</button>
    </form>
  )
}


export default NewPost;