import React from 'react';
import './InpageNav.scss';
import { Link, useRouteMatch } from 'react-router-dom';
import {useSelector} from 'react-redux';

const InpageNav = () => {
	const match = useRouteMatch();

	const postId = window.location.hash.replace('#post-', '');

	const posts = useSelector(state => state.posts);

	return (
		<div className="layoutItems inpageNav">
			{postId
				&& (
					<div>
						<a href="#title" className="">Up</a>
            <a href="#comments">Comments</a>
					</div>
				)
			}
			{posts
				.filter(post => {
					if(!postId) return true;
					return post.postId !== postId;
				})
				.map((post) => (<Link to={`/#post-${post.postId}`} className="link-to-post">{post.title}</Link>)

				)}
		</div>
	)
}

export default InpageNav; 