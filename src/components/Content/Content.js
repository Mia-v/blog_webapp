import React, { useState, useEffect } from 'react';
import './Content.scss';
import Post from '../Post/Post';
import { useSelector } from 'react-redux';


const Content = () => {


const posts = useSelector(state => state.posts);

	return (
		<div className="layoutItems content" >

			{
				posts.map(post => {
					return (
						<div className="firstPost">
							<h2 className="postTitle" >{post.title}</h2>
							<figure>
								<img className="postImg" src={post.img} alt={post.title} />
								<figcaption>{post.title}</figcaption>
							</figure>
							<p className="postTextContent">{post.textContent}</p>
						</div>
					)
				})
			}

		</div>
	)
}

export default Content;