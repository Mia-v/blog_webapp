import React, { useState, useEffect } from 'react';
import './Content.scss';
import Post from '../Post/Post';
import { useSelector } from 'react-redux';


const Content = () => {


const posts = useSelector(state => state.posts);

	return (
		<div className="layoutItems content" >

			{
				posts.map(post => <Post key={post.postId} {...post}/>
				)
			}

		</div>
	)
}

export default Content;