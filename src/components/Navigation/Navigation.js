import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import "./Navigation.scss";


const Navigation = () => {

	const [isChecked, setIsChecked] = useState(false);

	const handleToggle = () => setIsChecked(!isChecked);

	return (
		<div className="container-menu">
			<input checked={isChecked} onChange={handleToggle} type="checkbox" id="ckb" className="checkbox-menu" />
			<label for="ckb" className="menu-btn-cross">
				<span className="one"></span>
				<span className="two"></span>
				<span className="three"></span>
			</label>
			<ul className="menu-list" >
				<li>
					<NavLink to="/" 
						activeStyle={{
							fontWeight: "bold",
							color: "grey"
						}} 
						className="nav-items home-link">
							Home
					</NavLink>
					</li>
				<li>
					<NavLink to="/posts/1" 
						activeStyle={{
							fontWeight: "bold",
							color: "grey"
						}} 
						className="nav-items">
							Amsterdam
					</NavLink>
				</li>
				<li>
					<NavLink to="/posts/2" 
					activeStyle={{
						fontWeight: "bold",
						color: "grey"
					}}
					className="nav-items">
						Barcelona
					</NavLink>
				</li>
				<li>
					<NavLink to="/new"
						activeStyle={{
							fontWeight: "bold",
							color: "grey"
						}} 
						className="nav-items">
							New Post
					</NavLink>
				</li>

			</ul>
		</div>
	)
}

export default Navigation;