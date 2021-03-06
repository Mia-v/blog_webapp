import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Content.scss';
import Post from '../../components/Post/Post';

const Content = () => {
	const dispatch = useDispatch();
	const posts = useSelector(state => state.posts);
	
	useEffect(() => {
		
		fetch('http://localhost:8000/posts')
			.then(resp => {
				return resp.json();
			})
			.then(payload => {
				dispatch({
					type: 'POSTS_LOADED',
					payload,
				});
			});
	}, [])

	return (
		<div className="layoutItems content" >
			{
				posts && (posts.map(post => <Post key={post.postId} {...post} />
				))
			}
		</div> 
	)
}

export default Content;