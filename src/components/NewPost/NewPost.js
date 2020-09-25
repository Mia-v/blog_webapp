import React, { useState, useEffect } from 'react';
import './NewPost.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addNewPost } from '../../redux/redux_all_in_one';


const NewPost = () => {

  const [title, setTitle] = useState('');
  const [textContent, setTextContent] = useState('');


  const dispatch = useDispatch();

  const handleChangeTitle = (e) => setTitle(e.target.value);
  const handleChangeTextContent = (e) => setTextContent(e.target.value);

  let postId = useSelector(state => state.posts[state.posts.length - 1].postId + 1);


  const handleAddNewPost = (e) => {
    e.preventDefault();
    if (title && textContent) {
      dispatch(
        addNewPost({
          postId,
          title,
          textContent
        })
      )
      setTitle('');
      setTextContent('');
    }
  }


  return (
    <form className = "formNewPost" onSubmit={handleAddNewPost}>
      <input name={title} onChange={handleChangeTitle} />
      <textarea className="newPostInput" name="textContent" onChange={handleChangeTextContent} >{textContent}</textarea>
      <button type="submit">Add new post</button>
    </form>
  )
}


export default NewPost;