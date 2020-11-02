import React from 'react';
import './InpageNav.scss';
import { useRouteMatch } from 'react-router-dom';
import {useSelector} from 'react-redux';

const InpageNav = () => {
	const match = useRouteMatch();

	const postIdFromHash = window.location.hash.replace('#post-', '');
	const postId = window.location.pathname.replace('/posts/', '').replace('/', '');

	const posts = useSelector(state => state.posts);

	return (
		<div className="layoutItems inpageNav">
			{postId
				&& (
					<div>
						<a href="#title" className="">Up</a> <br/>
            <a href="#comments">Comments</a>
						<hr/>
					</div>
				)
			}
			{posts 
			&&
			(posts
				.filter(post => {
					if(!postIdFromHash) return true;
					return post.postId !== postIdFromHash;
				})
				.map((post) => (<a href={`/#post-${post.postId}`} key={post.postId} className="link-to-post">{post.title}</a>))
			)}
		</div>
	)
}

export default InpageNav; 